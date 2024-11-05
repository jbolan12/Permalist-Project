import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  db.query("SELECT * FROM items", (err, result) => {
    if (err) throw err;
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: result.rows,
    });
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  db.query("INSERT INTO items (title) VALUES ($1)", [item], (err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.post("/edit", (req, res) => {
  const taskId = req.body.updatedItemId;
  const newTitle = req.body.updatedItemTitle;
  db.query("UPDATE items SET title = $1 WHERE id = $2", [newTitle, taskId], (err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.post("/delete", (req, res) => {
  const taskId = req.body.deleteItemId;
  db.query("DELETE FROM items WHERE id = $1", [taskId], (err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.post("/mark-complete", (req, res) => {
  const taskId = req.body.completedItemId;
  db.query("UPDATE items SET is_completed = NOT is_completed WHERE id = $1", [taskId], (err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
