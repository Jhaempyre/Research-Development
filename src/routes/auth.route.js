import { Router } from "express";
import { registerUser,
        loginUser,
        logOut,
        listOfSideBar } from "../controllers/user.controllers.js";    
import {registerAdmin ,
        saveRecordToShyamDatabase,
        saveRecordToRamDatabase} from "../controllers/useradmin.controllers.js"          
const router = Router()


router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route( "/logout" ).get(logOut)
router.route("/listacc").get(listOfSideBar)



//Admin routes
router.route("/adminsignup").post(registerAdmin);
router.route("/shyam").post(saveRecordToShyamDatabase);
router.route("/ram").post(saveRecordToRamDatabase)


export default router