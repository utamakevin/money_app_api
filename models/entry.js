const db = require("../db")

class Entry {
  static findAll() {
    return db.query("select * from entry;").then(res => res.rows)
  }

  static findByTypeCategory(type, category) {
    return db.query(`select * from entry where type = $1 and category = $2;`, [type, category]).then(res => res.rows)
  }

  static findByTypeMonth(type, month) {
    return db.query(`select * from entry where type = $1 and month = $2;`, [type, month]).then(res => res.rows)
  }

  static findRevenue() {
    return db.query(`select * from entry where type = 'revenue';`).then(res => res.rows)
  }
 
  static findExpense() {
    return db.query(`select * from entry where type = 'expense';`).then(res => res.rows)
  }

  static findRevenueCategories() {
    return db.query(`select distinct category from entry where type = 'revenue';`)
  }

  static findExpenseCategories() {
    return db.query(`select distinct category from entry where type = 'expense';`)
  }

  static findRevenueMonths() {
    return db.query(`select distinct month from entry where type = 'revenue';`)
  }
  
  static findExpenseMonths() {
    return db.query(`select distinct month from entry where type = 'expense';`)
  }

  static create({ amount, type, category, month, year }) {
    const sql = `insert into entry (amount, type, category, month, year) values ($1, $2, $3, $4, $5) returning *;`

    return db.query(sql, [amount, type, category, month, year]).then(res => res.rows[0])
  }

  static update(id, newEntry) {
    const sql = `update entry set amount = $2, type = $3, category = $4,month = $5, year = $6 where id = $1 returning *;`

    return db
      .query(sql, [id, newEntry.amount, newEntry.type, newEntry.category, newEntry.month, newEntry.year])
      .then(res => res.rows[0])
  }

  static destroy(id) {
    const sql = `delete from entry where id = $1;`

    return db.query(sql, [id])
  }
}

module.exports = Entry
