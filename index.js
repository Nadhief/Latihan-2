const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const routes = require("./routes/route.js");

app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// select * from buku
// select * from buku where id=?
// insert into buku (judul_buku, penulis, tahun_terbit, genre) values (?, ?, ?, ?)
// update buku set judul_buku=?, penulis=?, tahun_terbit=?, genre=? where id=?
// delete from buku where id=?
// select buku.bukuid, buku.judul_buku, penulis.penulisid
// from buku
// inner join penulis on penulis.penulisid=buku.penulisid;
