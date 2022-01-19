exports.getHomePAge = (req, res) => {
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