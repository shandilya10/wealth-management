import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  symbol: {type: String, required: true},
}, {
  timestamps: true
});

const stockModel = mongoose.model("Stock", stockSchema);
export default stockModel;