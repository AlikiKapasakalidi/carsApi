const db = require('../database');

const book = {
  get: function(callback) {
    return db.query('select * from book order by id_book desc', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from book where id_book=?', [id], callback);
  },
  add: function(book, callback) {
    return db.query(
      'insert into book (brand,model,yearmodel) values(?,?,?)',
      [book.brand, book.model, book.yearmodel],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from car where idcar=?', [id], callback);
  },
  update: function(id, car, callback) {
    return db.query(
      'update car set brand=?,model=?, yearmodel=? where idcar=?',
      [car.brand, car.model, car.yearmodel, id],
      callback
    );
  }
};
module.exports = car;