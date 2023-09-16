const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/cherryblossomkindergarten")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    name:{
            type:String,
            requird:true
    },
    phone:{
        type:String,
        requird:true
    },
    email:{
        type:String,
        requird:true
    },
    msg:{
        type:String,
        requird:true
}
})

const collection=mongoose.model("collection",newSchema)

// data =[{
//     name :"Sagar"
// },
// {
//     name :"Paras"
// }
// ]
// collection.insertMany(data)

module.exports=collection

