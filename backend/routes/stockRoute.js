import express from 'express';
import Stock from '../models/stockModel';
import { isAuth } from '../util';
const router = express.Router();
router.post("/follow",isAuth, async(req,res) => {
    const newStock = new Stock({
      user: req.user._id,
      symbol: req.body.symbol_hid,
    });
    const newStockCreated = await newStock.save();
    res.status(201).send({ message: "New Order Created", data: newStockCreated });
});

router.get("/mystocks", isAuth, async (req, res) => {
  const mystock = await Stock.find({ user: req.user._id });
  res.send(mystock);
});

router.delete("/mystocks/:s_id", isAuth, async (req, res) => {
  const stock = await Stock.findOne({ _id: req.params.s_id });
  if (stock) {
    const deletedStock = await stock.remove();
    res.send(deletedStock);
  } else {
    res.status(404).send("Stock Not Found.")
  }
});

export default router;