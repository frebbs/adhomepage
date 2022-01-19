const connectionLogger = require('../utils/connectionLogger');

exports.getHomePAge = (req, res) => {
    connectionLogger.emit('connect', req);
    res.render('index');
}

exports.getAboutPage = (req, res) => {
    res.render('about');
}

exports.getContactPage = (req, res) => {
    res.render('contact');
}

exports.getLoginPage = (req, res) => {
    res.render('login');
}