import request from 'superagent';
import Villagers from '../models/Villagers.js';

export default class VillagersService {
  static async generateVillager({ vid }) {

    const data = await request.get(`http://acnhapi.com/v1/villagers/${vid}`);

    const vill = data.body;
    const villager = {
      vid: vill.id,
      name: vill.name['name-USen'],
      species: vill.species,
      personality: vill.personality,
      gender: vill.gender,
      catchphrase: vill['catch-translations']['catch-USen'],
    };

    const grabVill = await Villagers.createVillager(villager);
    return grabVill;
  }
}

