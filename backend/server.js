const express = require ('express');
 const mongoose = require('mongoose');
  const Service = require('./models/services');
  const Experience = require('./models/experiences');
  const cors = require('cors');
 //express app
 const app = express();
 app.use(cors());

 //connect to mongodb
 const dbURI = 'mongodb+srv://enow:donte2003@donte.lvqyaoe.mongodb.net/portfolio?retryWrites=true&w=majority';

 mongoose.connect(dbURI)
   .then(result=>{
      console.log('connected to db');
      app.listen(5000);
   })
 .catch(err=>console.log(err));
 

// register view engine
 app.set('view engine','ejs');

 //using middlewares
 app.use(express.static('public'));

 //mongoose and mongo sandbox routes
 app.get('/api/service/services',(req,res)=>{
  Service.find()
    .then(result=>{
      data = result;
      res.send(data);
    })
    .catch(err=>console.log(err));
 });

 app.get('/api/experience/experiences',(req,res)=>{
  Experience.find()
  .then(result=>{
    data = result;
    res.send(data);
  })
  .catch(err=>console.log(err));
 })

 
 
 

 