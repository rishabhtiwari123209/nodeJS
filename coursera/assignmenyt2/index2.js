const assert=require('assert');
exports.insertDocument=(db,document,collection,callback);
const coll=db.collection(collection);
return coll.insert(document);
};

exports.findDocuments=(db,collectioin,callback)=>{
    const coll=db.collection(collection);
    return coll.find({}).toArray();
};
exports.removeDocuments=(db,collectioin,callback)=>{
    const coll=db.collection(collection);
    return coll.deleteOne(document);
};
exports.updateDocuments=(db,collectioin,callback)=>{
    const coll=db.collection(collection);
    coll.updateOne(document,{$set:update},null,,(err))
    assert.equal(err,null);
    console.log("Update the document with",update)
    callback(result);
    
    // return coll.find({}).toArray();
};
exports.
}