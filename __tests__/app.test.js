import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import VillagersService from '../lib/services/VillagersService.js';
// import Villagers from '../lib/models/Villagers.js';

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
    const marshal = {
      vid: 372,
      name: 'Marshal',
      personality: 'Smug',
      species: 'Squirrel',
      gender: 'Male',
      catchphrase: 'sulky'
    };
    await VillagersService.generateVillager({ vid: 372 });
    const res = await request(app)
      .get('/api/v1/villagers/1');

    expect(res.body).toEqual({ ...marshal, id: '1' });
  });

  it('tests getting all villagers', async () => {
    const villager1 = await VillagersService.generateVillager({ vid: 163 });
    const villager2 = await VillagersService.generateVillager({ vid: 273 });
    const villager3 = await VillagersService.generateVillager({ vid: 3 });
    const villager4 = await VillagersService.generateVillager({ vid: 28 });

    const res = await request(app)
      .get('/api/v1/villagers');

    expect(res.body).toEqual([villager1, villager2, villager3, villager4]);
  });

  it('updates a specific villager', async () => {
    const villager = await VillagersService.generateVillager({
      vid: 194,
      name: 'Soleil',
      personality: 'Snooty',
      species: 'Hamster',
      gender: 'Female',
      catchphrase: 'tarnation'
    });

    const res = await request(app)
      .put('/api/v1/villagers')
      .send({
        catchphrase: 'munge king'
      });
    expect(res.body).toEqual({ ...villager, catchphrase: 'munge king' });
  });
});

