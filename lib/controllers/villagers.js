import { Router } from 'express';
import Villagers from '../models/Villagers.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const villager = await Villagers.createVillager(req.body);

      res.send(villager);
    } catch(err) {
      next(err);
    }
  });

