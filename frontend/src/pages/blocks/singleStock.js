import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
function Singlestock({symbol, name}) {
  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;
  const [uploading, setUploading] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    Axios
      .post('/api/profile/follow', {
        symbol_hid: symbol
      }, {
        headers: {
          Authorization: ' Bearer ' + userInfo.token
        }
      })
      .then((response) => {
        console.log(response);
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
    <div className="stock_item">
      <form onSubmit={handleSubmit} className="single-stock-form" id="stock-form">
        <div className="blog_details">
          <h4>{symbol}</h4>
          <p>{name}</p>
          <input type="hidden" id={symbol} name="symbol_hidden" value={symbol} />
          {followed ? <button type="submit" name="unfollow" id="unfollow" className="form-submit">UnFollow</button> : <button type="submit" name="signup" id="signup" className="form-submit">Follow</button>}
          {uploading && <div>Uploading...</div>}
          {error && <div>Error...</div>}
        </div>
      </form>
    </div>
    );
}
export default Singlestock;