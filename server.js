require('dotenv').config()
const express = require('express')
const app = express()
const helloRouter = require('./routes/hello')

app.use(express.json())

app.use('/hello',helloRouter)

app.get('/',(req,res)=>{
    res.send('Welcome to Simple Node.js on Azure!')
})

const PORT = process.env.PORT || 3002
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))