require('dotenv').config()
require('./db/conn')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT




//routes
app.use(cors())
app.use(express.json())
app.use('/api',require('./routes/auth'))
app.use('/api',require('./routes/notes'))





app.listen(PORT,()=>{
    console.log(`Server is Running On PORT: ${PORT}`);
})