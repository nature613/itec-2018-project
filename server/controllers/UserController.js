const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mail = require('../helpers/mailconfig')

module.exports = {
    async create(req, res, next) {
        // console.log(req.body)
        try{
            const user = await UserModel.create({ name: req.body.name, email: req.body.email, password: req.body.password })
            const emailToken = jwt.sign(
                {user: user._id}, 
                req.app.get('secretKey'),
                { expiresIn: '1h' }
            );
            const url = `http://localhost:4000/api/confirm/${emailToken}`;
            mail.transporter.sendMail({
                from: 'iQuiz <devadderkevin@gmail.com>',
                to: user.email,
                subject: 'Confirm account!',
                html: 'Please click <a href="' + url +'">' + url + '</a>'
            }).then(
                () =>{
                    res.send({"status": "email sent"})
                }
            ).catch(next)
        }
        catch(err){
            next(err)
        }
    },

   async authenticate(req, res, next) {
       try{
            const user = await UserModel.findOne({email:req.body.email});
            if(bcrypt.compareSync(req.body.password, user.password)) {
                if (user.confirmed == false){
                    res.status(401).send({"error": "user not yet confirmed"})
                }
                else{
                const toSend = {
                    name: user.name,
                    email: user.email,
                    admin: user.admin,
                    completedQuizzes: user.completedQuizzes
                }
                const token = jwt.sign({id: user._id, admin: user.admin}, req.app.get('secretKey'), { expiresIn: '1h' });
                res.json({status:"success", message: "user found!!!", data:{user: toSend, token:token}});
                }
            }
            else{
            res.json({status:"error", message: "Invalid email/password!!!", data:null});
            }
       }
       catch(err){
           next(err)
       }

    },

    confirm(req, res, next){
        jwt.verify(req.params.token, req.app.get('secretKey'), function (err, decoded) {
            if (err) {
                res.status(400).json({ status: "error", message: err.message, data: null });
            } else {
                // confirm user
                UserModel.findByIdAndUpdate({_id: decoded.user}, {confirmed: true}).then(
                    res.send({message: "success!!!"})
                ).catch(next)
            }
        });
        return res.redirect('http://localhost:8080/login');
    },

    async getAllUsers(req, res, next){
        try{
            users = await UserModel.find(req.query, 'name email admin')
            res.send(users)          
        }
        catch(err){
            next(err)
        }
    },

    async createAdmin(req, res, next){
        try{
            const user = await UserModel.create({ name: req.body.name, email: req.body.email, password: req.body.password, admin: true })
            res.send(user)
        }
        catch(err){
            next(err)
        }
    },

    //TODO: Add posibility for users to delete themselves
    async deleteUser(req, res, next){
        try{
            const user = await UserModel.findOneAndDelete({email: req.params.email}, {useFindAndModify: false});
            res.send(user)
        }
        catch(err){
            next(err)
        }
    }
   }
