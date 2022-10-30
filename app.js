const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const Products = require("./src/products");
const products = new Products();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/products", (req, res) => {
  res.render("./partials/productos", { products: products.getAll() });
});

app.post("/products", (req, res) => {
  products.add(req.body);
  res.redirect("/");
});

app.listen(3002, () => {
  console.log("Servidor iniciado en el puerto 3002");
});
