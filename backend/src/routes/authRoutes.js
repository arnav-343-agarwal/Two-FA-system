import { Router } from "express";
import passport from "passport";
import { register,login,logout,authStatus,setup2FA,verify2FA,reset2FA } from "../controllers/authController.js";

const router = Router();

const checkAuthenticated = (req,res,next)=> {
    if(req.isAuthenticated()) return next();
    else{
        res.status(401).json({message:"Unauthorized"})
    }
}
//Registration
router.post("/register",register);

//Login
router.post("/login",passport.authenticate("local") ,login);

//Auth Status
router.get("/status",authStatus);

//Logout
router.post("/logout",logout);

// 2FA Setup
router.post("/2fa/setup", checkAuthenticated ,setup2FA);

//verify
router.post("/2fa/verify", checkAuthenticated,verify2FA);

//Reset
router.post("/2fa/reset", checkAuthenticated,reset2FA);

export default router;





