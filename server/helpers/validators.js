var jwt = require('jsonwebtoken')


module.exports = {
    validateUser: function (req, res, next) {
        jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
            if (err) {
                res.status(400).json({ status: "error", message: err.message, data: null });
            } else {
                // add user id to request
                req.body.userId = decoded.id;
                req.body.isAdmin = decoded.admin;
                next();
            }
        });
    
    },
    validateAdmin: function (req, res, next){
        jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
            if (err) {
                res.status(400).json({ status: "error", message: err.message, data: null });
                // console.log('this is me')
            } 
            else if(decoded.admin != true){
                res.status(403).json({status: "error", message: "Forbidden"});
            }
            else {
                // add user id to request
                req.body.userId = decoded.id;
                req.body.isAdmin = decoded.admin;
                next();
            }
        });
    }

    

}