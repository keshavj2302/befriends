
const User = require('../models/users');

module.exports.home = async function(req, res){
    // return res.send('<h1>Home page</h1>');

    let user = await User.find({});

    // console.log(user);

    return res.render('home', {
        title:'befriends',
        users:user
    });
};


module.exports.create = async function(req, res){

    let user = await User.create({
        email:req.body.email,
        password:req.body.password,
        name:req.body.name,
        age:req.body.age
    });

    return res.redirect('back');

};