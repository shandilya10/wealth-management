import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
import Singlemystock from "./blocks/singleMystock";
function Mystocks() {
  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;
  const [uploading, setUploading] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [error, setError] = useState(false);
  const [stocks, setStocks] = useState([]);

    useEffect( () => {
        getStocks();
    },[]);

    const getStocks = async () => {
        Axios
      .get('/api/profile/mystocks', {
        headers: {
          Authorization: ' Bearer ' + userInfo.token
        }
      })
      .then((response) => {
        console.log(response.data);
        setStocks(response.data);
        setUploading(false);
        setFollowed(true);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
        setError(true);
      });
    };

    return (

    <div className="main">
        <section className="stocks">
          <div className="container">
            <div className="stock-content">
              <h2>Hello</h2>
              {stocks.map(stock => (
                    <Singlemystock s_id={stock._id} symbol={stock.symbol} name={stock.symbol} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}
export default Mystocks;