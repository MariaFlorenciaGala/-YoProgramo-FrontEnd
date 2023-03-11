const express = require('express');
const router = express.Router();
const programmingLenguajes = require('../services/programmingLenguajes');

router.get('/', async function(req, res, next) {
    try {
        res.json(await programmingLenguajes.read(req.query.page));
    }catch (err){
        console.error('Este es el error: ' + err.message);
        next(err);
    }
});

router.post('/', async function(req, res, next){
    try {
        res.json (await programmingLenguajes.create(req.body))
    } catch (err) {
        console.error('Este es el error: ' + err.message);
        next(err);
    }
})

router.put('/', async function(req, res, next){
    try {
        res.json (await programmingLenguajes.create(req.query.id))
    } catch (err) {
        console.error('Este es el error: ' + err.message);
        next(err);
    }
})

router.delete('/', async function(req, res, next){
    try {
        res.json (await programmingLenguajes.delete1(req.query.id))
    } catch (err) {
        console.error('Este es el error: ' + err.message);
        next(err);
    }
})


module.exports = router;