const express = require('express')
const { PORT } = require('../constants')
const app=express()
const {PORT}=require('./constants')
//app start
const appstart=()=>{
    try{
        app.listen(PORT,()=>{
            console.log('The app is running at http://localhost:${PORT}')
        })

    }catch(error){
        console.log('Error: ${error.message}')
    }
}
appstart()