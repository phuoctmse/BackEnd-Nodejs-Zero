const connection = require('../config/database')

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const getAboutPage = (req, res) => {
    res.send('This is About Page')
}

const getDetailPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage
}