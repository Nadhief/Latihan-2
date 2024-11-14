const express = require("express");
const router = express.Router();
const bukuController = require("../controller/bukuController");

router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "API Ready to Go",
  });
});

router.get("/books", bukuController.getAllBooks);
router.get("/books/:id", bukuController.getBooksById);
router.post("/books", bukuController.addBook);
router.put("/books/:id", bukuController.updateBook);
router.delete("/books/:id", bukuController.deleteBook);

module.exports = router;
