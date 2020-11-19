import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Singlemystock from "./blocks/singleMystock";
import { NavLink } from "react-router-dom";
import { logout } from '../actions/userActions';
function Mystocks(props) {
  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const [stocks, setStocks] = useState([]);

  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/login");
  }

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
      })
      .catch((err) => {
        console.log(err);
      });
    };

    return (
    <div className="main">
        <section className="stocks">
          <div className="container">
            <div className="stock-content">
            <div className="top-section">
                <NavLink className="stocks-link mystocks" to="/stocks">Back</NavLink>
                <h2>My Stocks</h2>
                <div className="links">
                  <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
                </div>
            </div>
            <div className="stock-boxes">
            {stocks === undefined ?  <img className="loading_image" src="assets/images/loading.gif" /> : stocks.length > 0 ? stocks.map(stock => (
                    <Singlemystock s_id={stock._id} symbol={stock.symbol} name={stock.name} type={stock.type} region={stock.region} currency={stock.currency} matchscore={stock.matchscore} />
              )) : <div className="stocks_process">No stocks available, Please follow stocks.</div>}
            </div>
            </div>
          </div>
        </section>
      </div>
    );
}
export default Mystocks;