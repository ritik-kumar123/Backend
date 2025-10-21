import mongoose, { Schema } from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    subcriber:
    {
        type:mongoose.Schema.Types.ObjectId,  // one who is subcribing
        ref:"USer",
        required:true
    },
    channel: { 
       type: mongoose.Schema.Types.ObjectId,  // one to whom "subcriber is subcribing"
        ref: 'User',
        required: true 
           },
},
        {
    timestamps: true
     }
    )

     export const Subscription = mongoose.model('Subscription', subscriptionSchema);