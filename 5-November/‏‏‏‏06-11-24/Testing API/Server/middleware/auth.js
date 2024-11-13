import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if(!token) return res.status(403).send("Token Missing");

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) return res.status(401).send("Invalid Token");
        req.userId = decoded._id;
        req.userRole = decoded.role;
        next();
    })
}

export const isAdmin = (req, res, next) => {
    if(!(req.userRole === "ADMIN"))
        res.status(401).send("NOT ADMIN");
    
    next();
}