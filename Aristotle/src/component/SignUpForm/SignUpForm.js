import { Outlet, Link } from "react-router-dom";
import React, { Component } from 'react';

const SignUpForm = () => {

	return (<> 
		<div className="d-flex flex-column align-content-end">
			<div className="app-auth-body mx-auto">
				<div className="app-auth-branding mb-4"><a className="app-logo"  >
					<img className="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo" /></a></div>
				<h2 className="auth-heading text-center mb-4">Sign up to Portal</h2>

				<div className="auth-form-container text-start mx-auto">
					<form className="auth-form auth-signup-form">
						<div className="email mb-3">
							<label className="sr-only" for="signup-email">Your Name</label>
							<input id="signup-name" name="signup-name" type="text" className="form-control signup-name" placeholder="Full name" required="required" />
						</div>
						<div className="email mb-3">
							<label className="sr-only" for="signup-email">Your Email</label>
							<input id="signup-email" name="signup-email" type="email" className="form-control signup-email" placeholder="Email" required="required" />
						</div>
						<div className="password mb-3">
							<label className="sr-only" for="signup-password">Password</label>
							<input id="signup-password" name="signup-password" type="password" className="form-control signup-password" placeholder="Create a password" required="required" />
						</div>
						<div className="extra mb-3">
							<div className="form-check">
								<input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
								<label className="form-check-label" for="RememberPassword">
									I agree to Portal's <a href="#" className="app-link">Terms of Service</a> and
									<a href="#" className="app-link">Privacy Policy</a>.
								</label>
							</div>
						</div>

						<div className="text-center">
							<button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Sign Up</button>
						</div>
					</form>

					<div className="auth-option text-center pt-5">Already have an account? 
						<Link className="text-link" to="/login">Log in</Link> .
						{/* <a className="text-link" target="_self" href="login" >Log in</a> */}
					</div>
				</div>



			</div>

			<footer className="app-auth-footer">
				<div className="container text-center py-3">
					<small className="copyright">Designed with <span className="sr-only">love</span><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path></svg>
						by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>

				</div>
			</footer>
		</div>




	</>);
}

export default SignUpForm;