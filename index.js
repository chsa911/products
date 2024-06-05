const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);
//form fields
app.post("/api/products",(req,res) => {
    var eindat= req.body.eindat
    var entdat=req.body.entdat
    var verdat=req.body.verdat
    var autor=req.body.autor
    var keyword=req.body.keyword
    var kwp=req.body.kwp
    var verlag=req.body.verlag
    var seiten=req.body.seiten
    var genre=req.body.genre
    var gengenau=req.body.gengenau
    var kontinent=req.body.kontinent
    var land=req.body.land
    var thema0=req.body.thema0
    var thema1=eq.body.thema1
    var thema2=req.body.thema2
    var zeit=req.body.zeit
    var amalin=req.body.amalin
    var position=req.body.position
    var kontinent=req.body.kontinent
    var land=req.body.land
    var thema0=req.body.thema0
    var thema1=eq.body.thema1
    var thema2=req.body.thema2

    var amalin
    var
        var
        var
        var

    position
    mark
    markrang
    topw:
    belber
    gesw
    zustand

    var data={
        "eindat":eindat,
        "entdat":entdat,
        "verdat":verdat,
        "autor":autor,
        "keyword":keyword,
        "kwp":kwp
        "verlag":verlag,
        "seiten":seiten,
        "genre""=req.body.genre
        "gengenau"=req.body.gengenau
        "kontinent":kontinent
        "land":land,
        "thema0"=req.body.thema0
        "thema1"=eq.body.thema1
        "thema2"=req.body.thema2
        "zeit":zeit,
        "amalin""=req.body.amalin
        "position"=req.body.position
        "kontinent":kontinent
        "land":land,
        "thema0"=req.body.thema0
        "thema1"=eq.body.thema1

    }




app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});


mongoose
  .connect(
    "mongodb://localhost:27017"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
