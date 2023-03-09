const express = require('express');
const cors = require('cors')//cors for own server connected with own
const app = express();
require("dotenv").config();//dotenv config
const port = process.env.PORT || 5000;
const categories = require('./data/categories.json')

//Middleware
app.use(cors());
app.use(express.json());

const { MongoClient } = require('mongodb');
//Always use `` sign otherwise error will happen
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vdirb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
      await client.connect();
      //const database = client.db("insertDB");
      //const servicesCollection = database.collection("volunteers");
      
      
    }
     finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);



app.get('/',(req,res) =>{
    res.send('Server is ok')
});
app.get('/news-categories',(req,res) =>{
    res.send(categories)
});

app.listen(port, () =>{
    console.log('Port is Ok');
})