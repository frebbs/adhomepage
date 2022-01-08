exports.getHomePAge = (req, res) => {
    res.render('index');
}

exports.getAboutPage = (req, res) => {
    res.render('about');
}

exports.getLoginPage = (req, res) => {
    res.render('login');
}