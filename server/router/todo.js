'use strict';
const router = require('express').Router();

// 查询 Todo 列表
router.get('/', function(req, res) {
    console.log(req.query);
    res.json({"todoTime": new Date()});
});

module.exports = router;