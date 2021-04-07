const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('lab09 routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('creates a new warrior', async () => {
    const res = await request(app)
    .post('api/v1/warriors')
    .send({title: 'Samurai', style: 'Sword Fighter', weapons: 'Samurai Sword'});
    expect(res.body).toEqual({
      id: 1,
      title: 'Samurai',
      style: 'Sword Fighter',
      weapons: 'Samurai Sword'
    });
  });
  it('gets all warriors in the database', async() => {
    const res = await request(app)
    .get('api/v1/warriors');
    expect(res.body).toEqual({
      id: 1,
      title: 'Samurai',
      style: 'Sword Fighter',
      weapons: 'Samurai Sword'
    });
  });
  it('gets all warriors by id', async() => {
    const res = await request(app)
    .get('api/v1/warriors/1');
    expect(res.body).toEqual({
      id: 1,
      title: 'Samurai',
      style: 'Sword Fighter',
      weapons: 'Samurai Sword'
    });
  });
  it('updates a warrior in the database', async() => {
    const res = await request(app)
    .put('api/v1/warriors/1')
    .send({title: 'Ninja', style: 'Stealth', weapons: 'Throwing Stars'});
    expect(res.body).toEqual({
       id: 1,
      title: 'Ninja',
      style: 'Stealth',
      weapons: 'throwing Stars'
    });
  });
  it('deletes a warrior from the database', async() =>{
    const res = await request(app)
    .delete('api/v1/warriors/1');
    expect(res.body).toEqual({
       id: 1,
      title: 'Ninja',
      style: 'Stealth',
      weapons: 'throwing Stars'
    }); //return shows deleted item 
  });
});
