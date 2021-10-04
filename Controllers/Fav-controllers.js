"Use strict";
const { favModal } = require("../Modals/Favarit.Madal");
let getTestControllar = (req, res) => {
  favModal.find().then((data) => {
    res.status(200).json(data);
  });
};

let creatTest = (req, res) => {
  let testData = req.body;
  let newTest = new favModal(testData);
  newTest.save();
  res.status(200).json(newTest);
};
const deleteTest = (req, res) => {
  let idTest = req.params.id;
  favModal.findByIdAndDelete(idTest).then(() => {
    favModal.find({}).then((data) => res.json(data));
  });
};
const updateFav = async (req, res) => {
  let fruteid = req.params.id;
  let update = req.body;
  favModal.findOne({ _id: fruteid }).then((item) => {
    (item.name = update.name),
      (item.image = update.image),
      (item.price = update.price);
    item.save();
  });
  let up = await favModal.find({});
  res.status(200).send(up);
};

module.exports = {
  getTestControllar,
  creatTest,
  deleteTest,
  updateFav,
};
