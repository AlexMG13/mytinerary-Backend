const verifyCity = (req,res,next) => {
    let { country, name, photo } = req.body 
    if (!country || !name || !photo) {
        return res.status(400).json({
            message: 'Invalid information'
        })
    }
    if (country == "" ){
        return res.status(400).json({
            message: 'Invalid country'
    })}
    if (name == "" ){
        return res.status(400).json({
            message: 'Invalid name'
    })}
    if (photo == "" ){
        return res.status(400).json({
        message: 'Invalid photo'
        })
    }
    next()
}
const verifyId = (req, res, next) => {
    let { id } = req.params
    if ( id == "" ){
        return res.status(400).json({
            message: 'Invalid id'
        })
    }
    next()
}

module.exports = { verifyCity, verifyId}