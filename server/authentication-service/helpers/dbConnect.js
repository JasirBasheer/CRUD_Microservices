import mongoose from 'mongoose'
export const connectDB = async() =>{
    mongoose.connect('mongodb+srv://jasirbinbasheerpp:G1nb2xD1btAzUiOt@auth.zmreq.mongodb.net/authenticationDB?retryWrites=true&w=majority')
    .then(()=>{
        console.log('database connected')
    })
    .catch((err)=>{
        console.log(err)
    })

} 