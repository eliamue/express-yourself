import pool from '../utils/pool';

export default class Villagers {
    id;
    vid;
    name;
    species;
    personality;
    gender;
    catchphrase;

    constructor(row) {
        this.id = row.id;
        this.vid = row.vid;
        this.name = row.name;
        this.species = row.species;
        this.personality = row.personality;
        this.gender = row.gender;
        this.catchphrase = row.catchphrase;
    }

    static async insert(value) {
        const { rows } = await pool.query(
            'INSERT INTO villagers (vid, name, species, personality, gender, catchphrase) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [value.vid, value.name, value.species, value.personality, value.gender, value.catchphrase]
            )
            return new Villagers(rows[0]);
    }

    static async getById(id) {
        const { rows } = await pool.query(
            'SELECT * FROM villagers WHERE id=$1',
            [id]
        );

        return new Villagers(rows[0]);
    }

    static async getAll() {
        const { rows } = await pool.query(
            'SELECT * FROM villagers'
        )
        return rows.map(row => new Villagers(row));
    }

    static async update(id, { vid, name, species, personality, gender, catchphrase }) {
        const existingVillager = await Villagers.getById(id);

        const newVid = vid ?? existingVillager.vid;
        const newName = name ?? existingVillager.name;
        const newSpecies = species ?? existingVillager.species;
        const newPersonality = personality ?? existingVillager.personality;
        const newGender = gender ?? existingVillager.gender;
        const newCatchphrase = catchphrase ?? existingVillager.catchphrase;

        const { rows } = await pool.query(
            'UPDATE villagers SET vid=$1, name=$2, species=$3, personality=$4, gender=$5 catchphrase=$6 WHERE id=$7 RETURNING *',
            [newVid, newName, newSpecies, newPersonality, newGender, newCatchphrase, id]
        );
            return new Villagers(rows[0]);
    }
}