// 1.importing express
const express = require('express')
require("./connection")
var empmodel =require ("./model/employee")

// 2.initialize
const app = new express()

//  mid
app.use(express.json())

// 3.api creation
app.get('/', (req, res) => {
    res.send('message fom the server')
})
// 5.trial
app.get('/trial', (req, res) => {
    res.send(' trial message ')
})
// 4.port
app.listen(3004, () => {
    console.log("port is running")
})
// add api
app.post("/add", async (req, res) => {
    try {
        await empmodel(req.body).save()
        res.send({ message:"data added!!"})
    } catch (error) {
        console.log(error)
        
    }
})
// view
app.get("/view", async (req, res) => {
    try {
       var show =await empmodel.find()
        res.send(show)
    } catch (error) {
       console.log(error) 
    }
})
// delete
app.delete("/remove/:id", async (req, res) => {
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted!!" })
    } catch (error) {
        console.log(error) 
    }
})

// update
app.put("/update/:id", async (req, res) => {
    try {
        await empmodel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "data updated!!", })
    } catch (error) {
        console.log(error)
    }
})