import { Router } from 'express';
// import Villagers from '../models/Villagers.js';
import VillagersService from '../services/VillagersService.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const villager = await VillagersService.generateVillager(req.body);

      res.send(villager);
    } catch(err) {
      next(err);
    }
  });

