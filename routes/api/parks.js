const mongoose = require('mongoose');
const router = require('express').Router();
const auth = require('../auth');
const Parks = mongoose.model('Parks');


//GET parks with distnace option (required, only authenticated users have access)
router.get('/', (req, res, next) => {  
    const query = req.query;
    return Parks.find(query, (err, parks) =>{       
            if(err){
                return res.send(err);
            }
                return res.json(parks);
    });
  });

  module.exports = router;