import mongoose , {Schema} from "mongoose";

const adminSchema = new Schema({

    fullname:{
        type:String,
        required:true,
        unique:true,
        lowercase :true,
        trim:true,
    },
    //This is same as school email as all the authentication is done
    //from this email please don't use personal email
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase :true,
        trim:true,
    },

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase :true,
        trim:true,

    },

    password:{
        type: String,  
        required:[true,"Passowrd caahiye re baba"]
    },


    schoolname:{
        type:String,
        required:true,
        trim:true,
    },

    schooluniquecode:{
        type:String,
        required:true,
        trim:true,
    },
//country /houseno, street-name ,/area/block /locality /sector, district , state , pincode 
    schooladress:{
        type:String,
        required:true,
        trim:true,
    },

    schoolmobile:{
        type:Number,
        required:true,
        trim:true,
    },
//this will be required for sms and whatsapp communication

    adminmobile:{
        type:Number,
        required:true,
        trim:true,
    }

},{
    timestamps:true
})

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;