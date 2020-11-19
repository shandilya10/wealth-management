import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink} from "react-router-dom";
import { logout } from '../actions/userActions';
import Singlestock from "./blocks/singleStock";

function Stocks(props) {
    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        props.history.push("/login");
    }

    const [stocks, setStocks] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('ibm');

    useEffect( () => {
        getStocks();
    },[query]);

    const getStocks = async () => {
        const response = await fetch(
            'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords='+query+'&apikey=9H1V4UQOAL9ECCDC');
        const data = await response.json();
        console.log(data.bestMatches);
        setStocks(data.bestMatches);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }
    return (
      <div className="main">
        <section className="stocks">
          <div className="container">
            <div className="stock-content">
              <div className="top-section">
                <h2>Welcome, {userInfo.name}</h2>
                <form onSubmit={getSearch} action="#">
                  <div class="search">
                    <input type="text" className="form-control" placeholder="Search Stocks Here..." value={search} onChange={updateSearch} required />
                    <div class="button-src">
                      <button className="button rounded-0 primary-bg text-white w-100 btn_1" type="submit">Search</button>
                    </div>
                  </div>
                </form>
                <div className="links">
                  <NavLink className="stocks-link" to="/mystocks">My Stocks</NavLink>
                  <button type="button" onClick={handleLogout} className="button secondary full-width">Logout</button>
                </div>
              </div>
              <div className="stock-boxes">
                {stocks.map(stock => (
                  <Singlestock symbol={stock["1. symbol"]} name={stock["2. name"]} type={stock["3. type"]} region={stock["4. region"]} currency={stock["8. currency"]} matchscore={stock["9. matchScore"]} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
export default Stocks;