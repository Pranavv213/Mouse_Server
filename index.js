const express = require('express');
const app = express();
var robot = require("robotjs");
var mouse = robot.getMousePos();
var ip = require("ip");
console.log ( ip.address() );
// 192.168.29.84:3000
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render('q.ejs')
})
app.get('/order',(req,res)=>{
    const {start} = req.query
    robot.moveMouse(19, 696);

    robot.mouseClick();

    // res.send(
    //     `<h1>incoming request</h1>`
    // )
})
app.get('/up',(req,res)=>{
    const {start} = req.query
   
   var  m = robot.getMousePos();
   robot.moveMouse(m.x, m.y-50);
   
})
app.get('/down',(req,res)=>{
    const {start} = req.query
   
   var  m = robot.getMousePos();
   robot.moveMouse(m.x, m.y+50);
   
})
app.get('/left',(req,res)=>{
    const {start} = req.query
   
   var  m = robot.getMousePos();
   robot.moveMouse(m.x-50, m.y);
    
})
app.get('/right',(req,res)=>{
    const {start} = req.query
   
   var  m = robot.getMousePos();
   robot.moveMouse(m.x+50, m.y);
    
})
app.get('/click',(req,res)=>{
    const {start} = req.query
   
  
    robot.mouseClick();
})
app.get('/bounce',(req,res)=>{
   res.render('boumce.ejs')
})
app.get('/hi',(req,res)=>{
    res.render('hi.ejs')
 })
app.listen(3000,()=>{
    console.log('listening')
});
console.log(mouse)
