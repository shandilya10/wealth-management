import React, { Component, useState } from "react";

function Singlestock({symbol, name}) {
    return (
    <div className="stock_item">
      <div className="blog_details">
        <h4>{symbol}</h4>
        <p>{name}</p>
        <ul className="blog-info-link">
          <li><a href="#"><i className="far fa-user" /> Follow</a></li>
        </ul>
      </div>
    </div>
    );
}
export default Singlestock;