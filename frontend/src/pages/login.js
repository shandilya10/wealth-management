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
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure><img src="assets/images/signin-image.jpg" alt="sing up image" /></figure>
                <NavLink className="signup-image-link" to="/register">Create an account</NavLink>
              </div>
              <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <form onSubmit={submitHandler} className="register-form" id="login-form">
                  {loading && <div>Loading...</div>}
                  {error && <div>{error}</div>}
                  <div className="form-group">
                    <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input type="email" name="email" id="email" placeholder="Your Name" onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                    <input type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                    <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
                  </div>
                  <div className="form-group form-button">
                    <button type="submit" className="form-submit">Log in</button>
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