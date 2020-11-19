import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  symbol: {type: String, required: true},
  name: {type: String},
  type: {type: String},
  region: {type: String},
  currency: {type: String},
  matchscore: {type: String},
}, {
  timestamps: true
});

const stockModel = mongoose.model("Stock", stockSchema);
export default stockModel;