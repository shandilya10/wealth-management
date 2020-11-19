import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
function Singlemystock({symbol, name, type, region, currency, matchscore, s_id}) {
  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;
  const [uploading, setUploading] = useState(false);
  const [unfollowed, setUnfollowed] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    Axios.delete("/api/profile/mystocks/" + s_id, {
        headers: {
          Authorization: ' Bearer ' + userInfo.token
        }
      })
      .then((response) => {
        console.log(response);
        setUploading(false);
        setUnfollowed(true);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
        setError(true);
      });
    };

    return (
    <div className={"stock_item " + (unfollowed && 'unfollowed')}>
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
          <input type="hidden" id={symbol} name="symbol_hidden" value={symbol} />
          <button type="submit" name="unfollow" id="unfollow" className="form-submit">{uploading ? "Loading" : "Unfollow" }</button>
          {error && <div>Error...</div>}
        </div>
      </form>
    </div>
    );
}
export default Singlemystock;