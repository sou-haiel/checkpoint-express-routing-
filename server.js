const express = require('express')
const app = express()
const port = 5000

app.use((req,res,next)=>{
    let hours=new Date().getHours()
    let dates=new Date().toString()
    if((hours<9 || hours>17) && (dates <'Monday' || dates >'Friday' )) {
        return res.sendFile(__dirname+'/public/close.html')
    }
  else  next()
})

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/index', (req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
app.get('/contact', (req,res)=>{
    res.sendFile(__dirname+'/public/contact.html')
})
app.get('/services', (req,res)=>{
    res.sendFile(__dirname+'/public/services.html')
})

app.listen(port, (err)=>{
    err ? console.log(err): console.log("server is running")
})