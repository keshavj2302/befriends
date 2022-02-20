
const User = require('../models/users');

module.exports.home = async function(req, res){
    // return res.send('<h1>Home page</h1>');
    if(!req.isAuthenticated()){return res.redirect('/user/signin');}

    let user = await User.find({});

    // console.log(user);

    return res.render('home', {
        title:'befriends',
        users:user
    });
};


