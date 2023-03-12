// Task1: initiate app and run server at 3000
const express = require('express');
const Mongoose = require('mongoose');
const cors =require('cors');
const logger = require('morgan');
const app =  express();




const path=require('path');
app.use(logger('dev'));
app.use(cors())
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


 const { employeeModel } = require('./model/employeeList');

Mongoose.connect('mongodb+srv://amalashraf04:aamssanamm1234@cluster0.sc2qvv5.mongodb.net/employee?retryWrites=true&w=majority', { useNewUrlParser: true });




//Task 2 : write api with error handling and appropriate api mentioned in the TODO below


//TODO: get data from db  using api '/api/employeelist'


app.get('/api/employeelist',async(req,res)=>{
    try{
    let data= await employeeModel.find()
    res.json(data)
    }
    catch(error){
        console.log('Error:',error)
        res.status(400).json()
    }
})





//TODO: get single data from db  using api '/api/employeelist/:id'


app.get('/api/employeelist/:id',async(req,res)=>{
    try{
    let data= await employeeModel.findById(req.params.id)
    res.json(data)
    }

    catch(error){
        console.log('Err:',error)
        res.status(400).json()
    }
})




//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post('/api/employeelist',async(req,res)=>{
    try{
    let data= new employeeModel(req.body)
    data.save()
    res.json({status: "Employee Added"})
    }
    catch(error){
        console.log('Err:',error)
        res.status(400).json()
    }
})





//TODO: delete a employee data from db by using api '/api/employeelist/:id'



app.delete('/api/employeelist/:id',async(req,res)=>{
    try{
    let data= await employeeModel.deleteOne(req.body)
    res.json(data)
    }

    catch(error){
        console.log('Err:',error)
        res.status(400).json()
    }
})



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist',async(req,res)=>{
    try{
   
   let data= await employeeModel.findOneAndUpdate({"_id": req.body._id}, req.body)
   res.json(data)
    }
    catch(error){
        console.log('Err:',error)
        res.status(400).json()
    }
})


app.listen(3000, ()=>{
console.log('Server started')
})

//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



