import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { connectDB } from './connect-db'

let port = 7777;
let app = express();

app.use(
    cors(),
    bodyParser.urlencoded({extended:true}),
    bodyParser.json()
);

export const addNewGroup = async task=>{
        let db= await connectDB();
        let collection = db.collection(`picnic_groups`);
        await collection.insertOne(task);
};

export const updateNewGroup = async task=>{
    let {id, park, isAvailable, name} = task;

    let db= await connectDB();
    let collection = db.collection(`picnic_groups`);

    if (park){
        await collection.updateOne({id}, {$set:{park}});      
    }
    if (name){
        await collection.updateOne({id}, {$set:{name}});      
    }
    if (isAvailable!==undefined){
        await collection.updateOne({id}, {$set:{isAvailable}});      
    }
    
};

app.listen(port,console.info("Server running, listening on port ", port));

app.get('/',(req,res)=>{

    res.send("Hello! Its me");
});

app.post('/group/new',async (req,res)=>{
    let task = req.body.task;
    await addNewGroup(task);
    res.status(200).send();
});

app.post('/group/update',async (req,res)=>{
    let task = req.body.task;
    await updateGroup(task);
    res.status(200).send();
});