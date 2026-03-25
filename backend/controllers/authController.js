import authService from "../services/authService.js"; 

class AuthController {

    register = async(req,res)=>{

        try {
            const {email,password} = req.body
          const {accessToken,refreshToken,user} = await authService.register(email,password)
           
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",      
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, 
          });
          res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",      
            sameSite: "strict",
            maxAge: 60 * 60 * 1000, 
          });
          res.status(201).json({success:true, user });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

         
    }
    

}