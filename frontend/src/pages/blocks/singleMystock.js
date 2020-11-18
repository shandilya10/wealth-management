import React, { useState } from "react";
import Axios from "axios";
import { useSelector } from "react-redux";
function Singlemystock({symbol, name, s_id}) {
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
          <p>{name}</p>
          <input type="hidden" id={symbol} name="symbol_hidden" value={symbol} />
          <button type="submit" name="unfollow" id="unfollow" className="form-submit">UnFollow</button>
          {uploading && <div>Uploading...</div>}
          {error && <div>Error...</div>}
          {unfollowed && <div>Successfully Unfollowed...</div>}
        </div>
      </form>
    </div>
    );
}
export default Singlemystock;