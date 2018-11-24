const UserModel = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mail = require('../helpers/mailconfig')

module.exports = {
    create: function(req, res, next) {
     
        UserModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }).then((user) => {
            const emailToken = jwt.sign(
                {user: user._id}, 
                req.app.get('secretKey'),
                { expiresIn: '1h' }
            );
            const url = 'http://localhost:4000/confirmation/' + emailToken;
            mail.transporter.sendMail({
                from: 'Kevin De Vadder <devadderkevin@gmail.com>',
                to: user.email,
                subject: 'Confirm account!',
                html: 'Please click <a href="' + url +'">' + url + '</a>'
            }).then(
                () =>{
                    res.send({"status": "email sent"})
                }
            ).catch(next)
        }
        );


    },
   authenticate: function(req, res, next) {
        UserModel.findOne({email:req.body.email}, function(err, userInfo){
            if (err) {
                next(err);
            }
             else {
                if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                    if (userInfo.confirmed == false){
                        res.status(401).send({"error": "user not yet confirmed"})
                    }
                    else{
                    const token = jwt.sign({id: userInfo._id, admin: userInfo.admin}, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
                    }
                }else{
                res.json({status:"error", message: "Invalid email/password!!!", data:null});
                }
            }
        });
    },
    confirm: function(req, res, next){
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
    }
   }
