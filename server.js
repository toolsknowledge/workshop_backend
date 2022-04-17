const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());
const ashokIT = mongodb.MongoClient;
app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@workshop.ymw1c.mongodb.net/my_db?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("my_db");  
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.json(array);
                }
            })          
        }
    });
});
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});