module.exports = function (req, res, next) {
    if (req.user.role === 'ADMIN') {
        next()
    } else {
        res.status(403).json({ message: 'You have no rights for this' })
    }
}
