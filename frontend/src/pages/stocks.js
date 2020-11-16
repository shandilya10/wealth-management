import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from "react-router-dom";
function Stocks() {
    const userSignin = useSelector(state=> state.userSignin);
    const {userInfo} = userSignin;
    return (
      <div className="main">
        <section className="stocks">
          <div className="container">
            <div className="stock-content">
              <div className="navigation"><NavLink className="signup-image-link" to="/login">Logout</NavLink></div>
    <h2>Welcome {userInfo.name}</h2>
            </div>
          </div>
        </section>
      </div>
    );
}
export default Stocks;