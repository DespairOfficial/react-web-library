module.exports = function (req, res, next) {
    if (req.user.role === 'USER') {
        next()
    }
}
