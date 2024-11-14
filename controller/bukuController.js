const bukuModel = require("../model/bukuModel");
const response = require("../response");

const getAllBooks = async (req, res) => {
  try {
    const result = await bukuModel.getAllBooks();
    response(200, result, "Get All Mahasiswa Data", res);
  } catch (error) {
    response(500, error, "Failed to get All Data", res);
  }
};

const getBooksById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await bukuModel.getAllBooks(id);
    response(200, result, "Get Book by Id Succesfuly ", res);
  } catch (error) {
    response(500, error, "Failed to get Book by Id", res);
  }
};

const addBook = async (req, res) => {
  try {
    const { judul_buku, penulis, tahun_terbit, genre } = req.body;
    const result = await bukuModel.addBook({
      judul_buku,
      penulis,
      tahun_terbit,
      genre,
    });
    response(200, result, "Books add succesfuly", res);
  } catch (error) {
    response(500, error, "Failed to insert Data", res);
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { judul_buku, penulis, tahun_terbit, genre } = req.body;
    console.log(judul_buku, penulis, tahun_terbit, genre);
    const result = await bukuModel.updateBook(id, {
      judul_buku,
      penulis,
      tahun_terbit,
      genre,
    });
    response(200, result, "Books update succesfuly", res);
  } catch (error) {
    response(500, error, "Failed to update Data", res);
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await bukuModel.deleteBook(id);
    if (result.affectedRows > 0) {
      response(200, result, "Book deleted", res);
    } else {
      response(404, null, "Mahasiswa not found", res);
    }
  } catch (error) {
    response(500, error, "Failed to delete Data", res);
  }
};

module.exports = {
  getAllBooks,
  addBook,
  getBooksById,
  updateBook,
  deleteBook,
};
