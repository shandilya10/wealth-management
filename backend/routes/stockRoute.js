import express from 'express';
import Stock from '../models/stockModel';
import { isAuth } from '../util';
const router = express.Router();
router.post("/follow",isAuth, async(req,res) => {
    var re_sym = req.body.symbol_hid;
    var re_use = req.user._id;
    Stock.findOne({symbol:re_sym, user: re_use}, function(err, example){
      if(err) console.log(err);
      if ( example){
        console.log("This has already been saved");
        } else {
          const newStock = new Stock({
            user: req.user._id,
            symbol: req.body.symbol_hid,
            name: req.body.name_hid,
            type: req.body.type_hid,
            region: req.body.region_hid,
            currency: req.body.currency_hid,
            matchscore: req.body.matchscore_hid,
          });
        const newStockCreated = newStock.save();
        res.status(201).send({ message: "New Order Created", data: newStockCreated });
        }
    });
    
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