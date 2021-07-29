import request from 'superagent';
import Villagers from '../models/Villagers.js';

export default class VillagersService {
  static async generateVillager({ vid }) {
    const data = await request.get(`http://acnhapi.com/v1/villagers/${vid}`);
    const mungedVillager = data.body;
    const villager = {
      vid: mungedVillager.id,
      name: mungedVillager.name['name-USen'],
      species: mungedVillager.species,
      personality: mungedVillager.personality,
      gender: mungedVillager.gender,
      catchphrase: mungedVillager['catch-translations']['catch-USen'],
    };
    const grabVill = await Villagers.insert(villager);

    return grabVill;
  }

  static async updateVillager({ vid, id }) {
    const data = await request.get(`http://acnhapi.com/v1/villagers/${vid}`);
    const mungedVillager = data.body;
    const villager = {
      vid: mungedVillager.id,
      name: mungedVillager.name['name-USen'],
      species: mungedVillager.species,
      personality: mungedVillager.personality,
      gender: mungedVillager.gender,
      catchphrase: mungedVillager['catch-translations']['catch-USen'],
    };
    const grabVill = await Villagers.update(id, villager);

    return grabVill;
  }
}

