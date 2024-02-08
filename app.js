const express=require('express')
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()
const patRoute=require("./controllers/patientRouter")
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Athirani26:athirani69@cluster0.w4km12l.mongodb.net/CovidDb?retryWrites=true&w=majority", 
{
  useNewUrlParser:true
}
)

app.use("/api/patient",patRoute)

app.listen(3001,()=>{
    console.log("running")
})