"Use strict";
const mongoose = require("mongoose");
const favSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
});
const favModal = mongoose.model("shaima", favSchema);
// let seedTest = () => {
//   let data = new favModal({
//     name: "",
//     image: "",
//     price: "",
//   });
//   data.save();
// };
// seedTest();
module.exports = {
  favModal,
};
