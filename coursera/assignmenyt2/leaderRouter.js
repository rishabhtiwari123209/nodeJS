const express =require('express');
const bodyParser=require('body-parser');
const mongoose =require('mongoose');

const Dishes=require('../models/dishes');
const dishRouter=express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route("/").get((req,res,next)=>{
    Dishes.find({}).then((dishes)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application')
        res.json(dishes);
    
    },(err)=>next(err)).catch((err)=>next(err));
})
.post((req,res,next)=>{
    Dishes.create(req.body).then((dishes)=>{
        console.log('Dish Created',dish);
        res.statusCode=200;
        res.setHeader('Content-Type','application')
        res.json(dish);
    },(err)=>next(err)).catch(err)=>next(err));
})//30
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUt operation not supporteson dishes');

});

.delete((res,req,next)=>{
    Dishes.remove({}).then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err)).catch((err)=>next(err));
    });

    dishRouter.route('/:dishId')
    .get((req,res,next)=>{
        Dishes.findById(req.params,dishId)
        .then((dish)=>{
            res.statusCode=200;res.setHeader('Content-Type','application/json');
            res.json(dishes);
        },(err)=>next(err)).catch((err)=>next(err));

        
    })
    .post((req,res,next)=>{
        res.statusCode=403;
        res.end('POST operation not supported on dishes');
    })
    .put((req,res,next)=>{
        Dishes.findByAndUpdate(req.params.dishId,{
            $set:req.body
        },{new:true}).then((dish)=>{
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json(dish);

        },(err)=>next(err))
        .catch((err)=>next(err));
    })

    .delete((req,res,next)=>{
        Dishes.findByIDAndRemove(req,param.dishesId).then((resp)=>{
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json(resp);

        },(err)=>next(err))//76
        .catch((err)=>next(err));
    });

    dishRouter.route('/:dishId/commments')
    .get((req,res,next)=>{
        Dishes.find({ })
        .then((dishes)=>{
            res.statusCode=200;
            res.json(dishes);
        },(err)=>next(err)).catch(err)=>next(err));
    })//89
.post((req,res,next)=>{
    Dishes.create(req.body).then((dish)=>{
        console.log('Dish created',dish);
        res.statusCode=200;
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(dish);
    },(err)=>next(err)).catch((err)=>next(err));
})

.put((req,res,next)=>{
    res.statsuCode=403;
    res.end('PUT operation not supported or ');

})
.delete((req,res,next)=>{
    Dishes.remove({})
    .then((resp)=>{
        res.statusCode=200;
        res,setHeader=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err)).catch((err)=>next(err));
})
// dishRouter.route('/dishId/comment/:commentId')
// .get((req,res,next)=>{
//     Dishes.findById(req.params.dishId).then((dish)={
//         res.statusCode=200;
//         res.setHEader('content-Type','application/json');
//     },(err)=>next(err)).catch((err)=>next(err));
//     })//122









dishRouter.route('/:dishId/comments/:commentId')
.get((req,res,next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null && dish.comments.id(req.params.commentId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dish.comments.id(req.params.commentId));
        }
        else if (dish == null) {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId
        + '/comments/' + req.params.commentId);
})
.put((req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null && dish.comments.id(req.params.commentId) != null) {
            if (req.body.rating) {
                dish.comments.id(req.params.commentId).rating = req.body.rating;
            }
            if (req.body.comment) {
                dish.comments.id(req.params.commentId).comment = req.body.comment;                
            }
            dish.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else if (dish == null) {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Dishes.findById(req.params.dishId)
    .then((dish) => {
        if (dish != null && dish.comments.id(req.params.commentId) != null) {
            dish.comments.id(req.params.commentId).remove();
            dish.save()
            .then((dish) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dish);                
            }, (err) => next(err));
        }
        else if (dish == null) {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Comment ' + req.params.commentId + ' not found');
            err.status = 404;
            return next(err);            
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});