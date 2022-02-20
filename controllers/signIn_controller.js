
const User = require('../models/users');



module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){return res.redirect('/');}
    return res.render('signin');
};

module.exports.destroySession = async function(req, res){
    try {
        if(req.isAuthenticated()){req.logout();return res.redirect('/user/signin');}
    } catch (err) {
        console.log('Error in destroying session : ', err);
        return res.redirect('back');
    }
}

module.exports.createSession = async function(req, res){
    try {
        console.log("req.user : ", req.user);
        console.log('req.isAuthenticated() : ', req.isAuthenticated());
        let user = await User.findOne({email:req.body.email});
        if(!user || user.password != req.body.password){
            console.log('Invalid username or password!!!');
            return res.redirect('back');
        }
        return res.redirect('/');

    } catch (err) {
        console.log('Error in createSession : ', err);
        return res.redirect('back');
    }
};