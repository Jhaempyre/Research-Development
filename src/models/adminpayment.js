import  mongoose , {Schema}  from "mongoose";

const signatureSchema = new Schema({


    schooluniquecode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
    
    razorpay_payment_id:{
        type:String,
        required:true,
        default:""
    },

    razorpay_order_id:{
        type:String,
        required:true,
        default:""

    },

    razorpay_signature:{
        type:String,
        required:true,
        default:""
    },

    amount:{
        type:Number,
        required:true,
        default:0
    },

    iseligible: {
        type: Boolean,
        default: false,
    },

    ispaid: {
        type: Boolean,
        default: false,
    }

},{
    timestamps:true
})

const Signature = mongoose.model("Signature",signatureSchema)

export default Signature;

/*{
  "razorpay_payment_id": "pay_29QQoUBi66xm2f",
  "razorpay_order_id": "order_9A33XWu170gUtm",
  "razorpay_signature": "9ef4dffbfd84f1318f6739a3ce19f9d85851857ae648f114332d8401e0949a3d"
} */

