import { Router } from 'express';
import Thing from '../models/Thing.js';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const thing = await Thing.createThing(req.body);

      res.send(thing);
    } catch(err) {
      next(err);
    }
  });

