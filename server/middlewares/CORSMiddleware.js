module.exports = function (req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )

    next()
}
