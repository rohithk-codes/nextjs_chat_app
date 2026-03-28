import jwt from "jsonwebtoken";


const authMiddleware = (req, res, next) => {
  const token = req.cookies.accessToken;        

    if (!token) {   
    return res.status(401).json({ error: "Unauthorized" });
  } 
    try {   
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; 
    next(); 
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  } 
};

export default authMiddleware;