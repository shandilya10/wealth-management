import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
function Singlestock({symbol, name, type, region, currency, matchscore}) {
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
        symbol_hid: symbol,
        name_hid: name,
        type_hid: type,
        region_hid: region,
        currency_hid: currency,
        matchscore_hid: matchscore,
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
    <div className={"stock_item " + (followed && 'followed')}>
      <form onSubmit={handleSubmit} className="single-stock-form" id="stock-form">
        <div className="blog_details">
          <h4>{symbol}</h4>
          <div className="inside_box">
            <div><span>Name</span> : {name}</div>
            <div><span>Type</span> : {type}</div>
            <div><span>Region</span> : {region}</div>
            <div><span>Currency</span> : {currency}</div>
            <div><span>Matchscore</span> : {matchscore}</div>
          </div>
          <button type="submit" name="signup" id="signup" className="form-submit">{uploading ? "Loading..." : "Follow" }</button>
          {error && <div>Error...</div>}
        </div>
      </form>
    </div>
    );
}
export default Singlestock;