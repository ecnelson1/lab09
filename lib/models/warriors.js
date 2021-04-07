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
        const {rows} = await pool.query('');
        return new Warrior(rows[0])
    }
    static async get() {
        const {rows} = await pool.query('');
        return rows.map(row => new Warrior(row));
    }
    static async get(id) {
        const {rows} = await pool.query('');
        return new Warrior(rows[0])
    }
    static async update(warrior, id) {
        const {rows} = await pool.query(`
        `);
        return new Warrior(rows[0]);
    }
    static async delete(id) {
        const {rows} = pool.query('');
        return new ondragover(rows[0]);
    }
}
