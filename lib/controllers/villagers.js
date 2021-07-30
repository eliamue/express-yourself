import { Router } from 'express';
import Villagers from '../models/Villagers.js';
import VillagersService from '../services/VillagersService.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const villager = await VillagersService.generateVillager(req.body);

      res.send(villager);
    } catch(err) {
      next(err);
    }
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const villager = await Villagers.getById(id);

      res.send(villager);
      
    } catch(err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const villagers = await Villagers.getAll();

      res.send(villagers);
    } catch(err) {
      next(err);
    }
  })
  
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { vid, name, personality, species, gender, catchphrase } = req.body;
      const updatedVillager = await Villagers.update(id, { vid, name, personality, species, gender, catchphrase });

      res.send(updatedVillager);
    } catch(err) {
      next(err);
    }
  });

