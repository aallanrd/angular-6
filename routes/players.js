var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var player = require('../models/Players.js');
var VerifyToken = require('../auth/VerifyToken');

/* GET ALL player */
router.get('/player', VerifyToken, function(req, res, next) {
  player.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE player BY ID */
router.get('/player/:id', VerifyToken, function(req, res, next) {
  player.findById(req.params.id, function (err, post) {
	if(!post) return res.status(404).send("No player found. ID may be invalid.");
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid.");
    res.json(post);
  });
});

/* SAVE player */
router.post('/player', VerifyToken, function(req, res, next) {
  player.create(req.body, function (err, post) {
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid.");
    res.json(post);
  });
});

/* UPDATE player */
router.put('/player/:id', VerifyToken, function(req, res, next) {
  player.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
	if(!post) return res.status(404).send("No player found. ID may be invalid.");
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid.");
    res.json(post);
  });
});

/* DELETE player */
router.delete('/player/:id', VerifyToken, function(req, res, next) {
  player.findByIdAndRemove(req.params.id, req.body, function (err, post) {
	if(!post) return res.status(404).send("No player found. ID may be invalid.");
    if (err) return res.status(400).send("Something went wrong. Data provided may be invalid.");
    res.json(post);
  });
});

module.exports = router;
