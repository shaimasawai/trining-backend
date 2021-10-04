"use strict";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());
const axios = require("axios");
const PORT = process.env.PORT || 3000;
const MONGO_SERVER = process.env.MONGO_SERVER;

mongoose.connect(
  "mongodb+srv://shaima:631995@cluster0.sjo2o.mongodb.net/Frout?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const {
  creatTest,
  deleteTest,
  updateFav,
} = require("./Controllers/Fav-controllers");

const getFaver = (req, res) => {
  let Url = "https://fruit-api-301.herokuapp.com/getFruit";
  axios.get(Url).then((md) => {
    let Fruit = md.data.fruits.map((item) => {
      return item;
    });
    res.send(Fruit);
  });
};

app.get("/frout", getFaver);
app.post("/addfroue", creatTest);
app.delete("/addfroue/:id", deleteTest);
app.put("/addfroue/:id", updateFav);
app.listen(PORT, () => console.log(`listimg on ${PORT}`));
