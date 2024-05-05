// model.js
import mongoose from 'mongoose';

const NameSchema = new mongoose.Schema({
  name: String,
});

const RollNumberSchema = new mongoose.Schema({
  rollNumber: Number,
});

const NameModel = mongoose.model('Name', NameSchema);
const RollNumberModel = mongoose.model('RollNumber', RollNumberSchema);

const RamNameModel = mongoose.model('RamName', NameSchema);
const RamRollNumberModel = mongoose.model('RamRollNumber', RollNumberSchema);

const ShyamNameModel = mongoose.model('ShyamName', NameSchema);
const ShyamRollNumberModel = mongoose.model('ShyamRollNumber', RollNumberSchema);

export {
  NameModel,
  RollNumberModel,
  RamNameModel,
  RamRollNumberModel,
  ShyamNameModel,
  ShyamRollNumberModel,
};
