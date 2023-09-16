const express=require("express")
const cors=require("cors")
const collection=require("./mongo")

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=> {

})
app.post("/",async(req,res)=>{
    const{name,email,phone,msg}=req.body

    const data={
        name:name,
        phone:phone,
        email:email,
        msg:msg
    }
    await collection.insertMany([data])
})

app.listen(8000,()=>{
    console.log("port connected")
})