const express  = require("express")
const Usermodel = require("./model/post.model")
const conectionToDb = require("./connection/db")
const app = express()


app.get("/home", (req, res)=>{
    res.status(200).send({
        msg:"Home page"
    })
})

app.get("/data", async(req, res)=>{
    const data = await Usermodel.find()

    res.status(200).send({
        data:data
    })
})

app.post("/add", async(req, res)=>{
try {
    const data = new Usermodel(req.body)
    await data.save()
    res.status(200).send({
        msg:"data added sucessfully"
    })
} catch (error) {
    res.status(400).send({
        msg:"something went wrong"
    })
}
})


app.listen(7000, async()=>{
    try {
        await conectionToDb
        console.log("connected to db")
        console.log("server is running")
    } catch (error) {
        console.log(error.message)
    }
    
})