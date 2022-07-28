const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const port = process.env.PORT || 3001

const user = require("./Users/Users.json")



app.get('/Users',(req,res)=>{
    return res.json(user)
})
app.listen(port,()=>{
    console.log('Running...');
})
