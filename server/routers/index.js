let express = require('express');

let router = express.Router();

router.get('/',(req,res,next)=>{
    res.send('this is index page')
})
router.get('/test',(req,res,next)=>{
    res.send('test')
})

module.exports = router;