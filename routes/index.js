const express = require('express');
const router = express.Router();

// home route
router.get('/',(req,res)=>{
    res.status(200).json({
        msg: "Welcome MongoDB"
    });
});

// not found route
router.get('*',(req,res)=>{
    res.status(404).json({
        msg: "404"
    });
});

module.exports = router;