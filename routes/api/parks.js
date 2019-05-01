const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('../auth');
const Parks = mongoose.model('Parks');


//GET parks with distnace option  (optional, everyone has access)
router.get('/', auth.optional, function(req, res, next) {  
    const query = {};
    if(req.query.distance){
        query.distance = req.query.distance;
    }
    return Parks.find(query, (err, parks) =>{       
            if(err){
                return res.send(err);
            }
                return res.json(parks);
    });
  });

//GET selected park with available groups (required, only authenticated users have access)
router.get('/:parkId', auth.required, function(req, res, next){  
    return Parks.findById(req.params.parkId, (err, park) =>{       
            if(err){
                return res.send(err);
            }
                return res.json(park);
    });
  });

  module.exports = router;