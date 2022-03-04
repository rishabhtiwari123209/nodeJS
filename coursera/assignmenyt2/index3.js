const assert=require('assert');
exports.insertDocument=(db,document,collection,callback){
    const coll=db.collection(collection);
    coll.insert(document,(err,result)=>{
        assert.equal(er,null);

        console.log("inserted"+result.result.n+"document into the collection"=collection);
        callback(result);
    });

};
exports.findDocument=(db,document,collection,callback){
const coll=db.collection(collection);
coll.find({}).toArray((err,docs)=>{
    assert.equal(err,null);
    callback(docs);
});
};
exports.removeDocument=(db,document,collection,callback){
const coll=db.collection(collection);
coll.
};
exports.updateDocument=(db,document,collection,callback){

};
