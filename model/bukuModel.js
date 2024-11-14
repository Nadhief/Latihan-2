const db = require("../connection");

const getAllBooks = () => {
  const sql = "SELECT * FROM buku";
  return new Promise((resolve, reject) => {
    db.query(sql, (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

const getBooksById = (id) => {
  console.log(id);
  const sql = "SELECT * FROM buku where id=?";
  return new Promise((resolve, reject) => {
    db.query(sql, [id], (error, results) => {
      if (error) reject(error);
      else resolve(results);
    });
  });
};

const addBook = (payload) => {
  console.log(payload);
  const sql =
    "INSERT INTO buku (judul_buku, penulis, tahun_terbit, genre) VALUES (?, ?, ?, ?)";
  return new Promise((resolve, reject) => {
    db.query(
      sql,
      [
        payload.judul_buku,
        payload.penulis,
        payload.tahun_terbit,
        payload.genre,
      ],
      (error, results) => {
        if (error) reject(error);
        else resolve(results);
      }
    );
  });
};

const updateBook = (id, payload) => {
  console.log(payload);
  const sql =
    "UPDATE buku SET judul_buku=?, penulis=?, tahun_terbit=?, genre=? WHERE id=?";
  return new Promise((resolve, reject) => {
    db.query(
      sql,
      [
        payload.judul_buku,
        payload.penulis,
        payload.tahun_terbit,
        payload.genre,
        id,
      ],
      (error, results) => {
        if (error) reject(error);
        else resolve(results);
      }
    );
  });
};

const deleteBook = (id) => {
  const sql = "DELETE FROM buku WHERE id=?";
  return new Promise((resolve, reject) => {
    db.query(sql, [id], (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
};

module.exports = {
  getAllBooks,
  addBook,
  getBooksById,
  updateBook,
  deleteBook,
};
