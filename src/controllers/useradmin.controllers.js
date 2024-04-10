import bcrypt from "bcrypt";
import Admin from "../models/useradmin.model.js";
import generateTokenAndSetCookie from "../utils/genrateToken.js";

const genrateAdminKey = function (length){
     const  characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}|[]\\;\',./';
     let result = '';
     
     for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
    
      return result;
};

const genrateUniqueCode = function(length){
    const characters = '0123456789' ; 
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result ; 

}


const registerAdmin = async(req,res)=>{
    try {
        const {fullname,email ,  username , password , confirmPassword,
             schoolname , schooladress,schoolmobile , adminmobile}=req.body
        console.log(req.body) ;    
             if (!email) {
                return res.status(400).json({
                     message: "Email is required" 
                    });
            }
            if (!fullname) {
                return res.status(400).json({
                     message: "Full name is required" 
                    });
            }
            if (!username) {
                return res.status(400).json({
                     message: "Username is required" 
                    });
            }
            if (!password) {
                return res.status(400).json({
                     message: "Password is required" 
                    });
            }
            if (!confirmPassword) {
                return res.status(400).json({
                     message: "Confirm password is required" 
                    });
            }
            if (!schoolname) {
                return res.status(400).json({
                     message: "School name is required" 
                    });
            }
            if (!schooladress) {
                return res.status(400).json({
                     message: "School address is required" 
                    });
            }
            if (!schoolmobile) {
                return res.status(400).json({
                     message: "School mobile is required" 
                    });
            }
            if (!adminmobile) {
                return res.status(400).json({
                     message: "Admin mobile is required" 
                    });
            }
            if (password !== confirmPassword) {
                return res.status(400).json({ error: "Passwords don't match" });
            }
    
            //Finding if the admin already exists
            const admin = await Admin.findOne({ username });
    
            if(admin){
                return res.status(400).json({
                    error : "Username already exsist"
                })
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            console.log(hashedPassword)
            const accessKey = genrateAdminKey(12)
            const schooluniquecode = genrateUniqueCode(10)
            console.log(accessKey);
            console.log(schooluniquecode);
            
            const newAdmin = new Admin({
                fullname,
                email ,
                username ,
                password ,
                schoolname,
                schooladress,
                schoolmobile,
                adminmobile ,
                accessKey,
                schooluniquecode
            })
            console.log(newAdmin)
            if(newAdmin){
                await newAdmin.save();
    
                return res.status(200).json({
                    message: "Admin created successfully" ,
                    newAdmin
                })
            }else{
                return res.status(400).json({
                    error: "Invalid user data" 
                })
            }
    
    } catch (error) {
        console.log("Error in signup controller", error.message);
    console.log(error);
    res.status(500).json({
         error: "Internal Server Error" });
        
    }

}

export {registerAdmin}