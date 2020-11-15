import React from "react";
import {NavLink} from "react-router-dom";
function Register() {
    return (
      <div className="main">
        {/* Sign up form */}
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Register</h2>
                <form method="POST" className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name" /></label>
                    <input type="text" name="name" id="name" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"><i className="zmdi zmdi-email" /></label>
                    <input type="email" name="email" id="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass"><i className="zmdi zmdi-lock" /></label>
                    <input type="password" name="pass" id="pass" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline" /></label>
                    <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                  </div>
                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" defaultValue="Register" />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure><img src="assets/images/signup-image.jpg" alt="sing up image" /></figure>
                <NavLink className="signup-image-link" to="/login">I am already member</NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
 
export default Register;