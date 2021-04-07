const { query } = require('../utils/pool');
const pool = require('../utils/pool')

module.exports = class Warrior {
    id;
    title;
    style;
    weapons;
    constructor(row) {
        this.id = row.id;
        this.title = row.title;
        this.style = row.style;
        this.weapons = row.weapons
    }
    static async insert(warrior){
        const {rows} = await pool.query('INSERT INTO warriors (title, style, weapons) VALUES ($1, $2, $3) RETURNING *', [warrior.title, warrior.style, warrior.weapons]);
        return new Warrior(rows[0])
    }
    static async get() {
        const {rows} = await pool.query('SELECT * FROM warriors');
        return rows.map(row => new Warrior(row));
    }
    static async getById(id) {
        const {rows} = await pool.query('SELECT * FROM warriors WHERE id=$1', [id]);
        return new Warrior(rows[0])
    }
    static async update(warrior, id) {
        const {rows} = await pool.query(`
        UPDATE warriors
        SET title = $1,
        style = $2,
        weapons = $3
        WHERE id = $4
        RETURNING *
        `,
        [warrior.title, warrior.style, warrior.weapons, id]);
        return new Warrior(rows[0]);
    }
    static async delete(id) {
        const {rows} = await pool.query('DELETE FROM warriors WHERE id =$1 RETURNING *', [id]);
        return new Warrior(rows[0]);
    }
}
