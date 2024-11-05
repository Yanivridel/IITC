
const validateJoke = (req, res, next) => {
    if (
        !req.body.setup ||
        !req.body.punchline ||
        typeof req.body.punchline !== "string" ||
        typeof req.body.setup !== "string") {
        return res.status(400).send({
            message: "Missing Fields"
        })
    }
    
    next()
}


export { validateJoke }