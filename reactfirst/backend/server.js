const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors())

app.get('/', (re,res)=>{
    return res.json("from Backend");
})

app.get('/admin/books', (req,res)=>{
    return req.json('book details');
})
app.listen(3000,()=>{
    console.log("listening");
})