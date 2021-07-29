import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo CRUD routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('tests create route', async () => {
    const thing = { body: thing };
    const res = await request(app)
      .post('/api/v1/thing')
      .send(thing);

    expect(res.body).toEqual(thing);
  });
});

