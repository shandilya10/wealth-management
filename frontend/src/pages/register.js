import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
    function Register(props) {

      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [rePassword, setRePassword] = useState('');
      const [passwordmatch, setPasswordmatch] = useState(true);
      const userRegister = useSelector(state => state.userRegister);
      const { loading, userInfo, error } = userRegister;
      const dispatch = useDispatch();

      const redirect = props.location.search ? props.location.search.split("=")[1] : '/login';
      useEffect(() => {
        if (userInfo) {
          props.history.push(redirect);
        }
        return () => {
          //
        };
      }, [userInfo]);
      const submitHandler = (e) => {
        e.preventDefault();
        if(password !== rePassword){
          setPasswordmatch(false);
        }
        else{
          dispatch(register(name, email, password));
        }
      }
      
    return (
      <div className="main">
        {/* Sign up form */}
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Register</h2>
                <form onSubmit={submitHandler} className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input type="text" name="name" id="name" placeholder="Your Name" required onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                    <input type="email" name="email" id="email" placeholder="Your Email" required onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                    <input type="password" name="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                    <input type="password" name="rePassword" id="rePassword" placeholder="Repeat your password" required onChange={(e) => setRePassword(e.target.value)}/>
                  </div>
                  <div className="form-group form-button">
                  {loading && <span className="error_form">User already exist!</span>}
                  {error && <span className="error_form">Something is wrong registering!!</span>}
                  {passwordmatch ? "" : <span className="error_form">Password does not match!</span> }
                  <div className="log_res_links">
                    <button type="submit" name="signup" id="signup" className="form-submit">Register</button>
                    <NavLink className="signup-image-link" to="/login">I am already member</NavLink>
                  </div>
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure><img src="assets/images/signup-image.jpg" alt="sing up image" /></figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default Register;