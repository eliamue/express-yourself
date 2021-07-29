import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import VillagersService from '../lib/services/VillagersService.js';

describe('demo CRUD routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('tests create villager route', async () => {
    const villager = { 
      vid: 356,
      name: 'Peanut',
      personality: 'Peppy',
      species: 'Squirrel',
      gender: 'Female',
      catchphrase: 'slacker'
    };
    const res = await request(app)
      .post('/api/v1/villagers')
      .send({ vid: 356 });

    expect(res.body).toEqual({ ...villager, id:'1' });
  });

  it('tests get villager by id route', async () => {
    const marshal = await VillagersService.generateVillager({
      vid: 372,
      name: 'Marshal',
      personality: 'Smug',
      species: 'Squirrel',
      gender: 'Male',
      catchphrase: 'sulky'
    });
    const res = await request(app)
      .get(`/api/v1/villagers/${marshal.id}`);

    expect(res.body).toEqual(marshal);
  });

});

