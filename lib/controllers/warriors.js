const { Router } = require('express');
const Warrior = require('../models/warrior');

module.exports = Router()
.post('/', async (req, res, next) => {
    try {
        const warrior = await Warrior.insert(req.body);
        res.send(warrior);
    } catch(err) {
        next(err);
    }
   })
.get('/', async(req, res, next) => {
    try {
      const warriors = await Warrior.get();
      res.send(warriors);
    } catch(err) {
      next(err);
    }
  })

  .get('/:id', async(req, res, next) => {
    const id = req.params.id;
    try { 
      const warrior = await Warrior.getById(id);
      res.send(warrior);
    } catch(err) {
      next(err);
    }
  })

  .put('/:id', async(req, res, next) => {
    const id = req.params.id;
    try {
      const warrior = await Warrior.update(req.body, id);
      res.send(warrior);
    } catch(err) {
      next(err);
    }
  })

  .delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    try {
      const deletedWarrior = await Warrior.delete(id);
      res.send(deletedWarrior); 
    } catch(err) {
      next(err);
    }
  });
