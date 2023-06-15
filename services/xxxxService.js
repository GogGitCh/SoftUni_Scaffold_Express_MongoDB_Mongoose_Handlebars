const Xxxx = require("../models/Xxxx");

async function getAll() {
  return Xxxx.find({}).lean();
}                
                               
async function getById(id) {
  return await Xxxx.findById(id).lean();
}

async function create(hotel) {
  return await Xxxx.create(hotel);
}

async function update(id, hotel) {
  const existing = await Xxxx.findById(id);
  await existing.save()
}

async function deleteById(id) {}

async function xxxxFunc() {}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  xxxxFunc,
};
