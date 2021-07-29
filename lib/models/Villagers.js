import pool from '../utils/pool';

export default class Villagers {
    id;
    name;
    species;
    personality;
    gender;
    catchphrase;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.species = row.species;
        this.personality = row.personality;
        this.gender = row.gender;
        this.catchphrase = row.catchphrase;
    }

    static async createVillager(value) {
        const { rows } = await pool.query(
            'INSERT INTO villagers (name, species, personality, gender, catchphrase) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [value.name, value.species, value.personality, value.gender, value.catchphrase]
        )
        return new Villagers(rows[0]);
    }
}