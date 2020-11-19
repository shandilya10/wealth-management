import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    useEffect(() => {
      if (userInfo) {
        props.history.push("/stocks");
      }
      return () => {
        //
      };
    }, [userInfo]);
    const submitHandler = (e) => {
      e.preventDefault();
      dispatch(signin(email, password));
    }
    return (
      <div className="main">
        {/* Sing in  Form */}
        <h1>Wealth Management Portfolio</h1>
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure><img src="assets/images/signin-image.jpg" alt="sing up image" /></figure>
              </div>
              <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <form onSubmit={submitHandler} className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input type="email" name="email" id="email" placeholder="Username" required onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                    <input type="password" name="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="form-group form-button">
                    {loading && <div>Loading...</div>}
                    {error && <span className="error_form">Invalid Username or Password...</span>}
                    <div className="log_res_links">
                      <button type="submit" className="form-submit">Log in</button>
                      <NavLink className="signup-image-link" to="/register">Not Registered?</NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
export default Login;