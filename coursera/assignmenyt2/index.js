// node and mongodb part1

const Mongo=require('mongodb').Mongo;
const assert=require('assert');

const url ='mongodb"//localhost:27017/';
const dbname='conFusion';

Mongo.connect(url,(err,client)=>{
    assert.equal(err,null);
    console.log('Connected correcly to the server');
    const db=client .db(dbname);
    const collection=db.collection('dishes');
    collection.insertOne({"name":"anil","description":"very decent boy");
    assert.equal(err,null);
    console.log('After insert:\n');
    console.log(result.ops);

    collection.find({}).toArray((err,docs)=>{
        assert.equal(err,null);

        console.log('found:\n');
        console.log(docs);
        db.dropCollection('dishes',(err,result)=>{
            assert.equal(err,null);
            client.close();
        });
    });
});