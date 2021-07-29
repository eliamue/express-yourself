import pool from '../utils/pool';

export default class Thing {
    id;
    thing;


    constructor(row) {
        this.id = row.id;
        this.thing = row.thing;
        this.otherthing = row.otherthing;
    }

    static async createThing(value) {
        const { rows } = await pool.query(
            'INSERT INTO things (thing, otherthing) VALUES ($1, $2) RETURNING *',
            [value.thing, value.otherthing]
        )
        return new Thing(rows[0]);
    }
}