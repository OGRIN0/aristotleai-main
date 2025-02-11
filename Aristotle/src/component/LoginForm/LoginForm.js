import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { Component } from 'react';
import useAuth from "../../service/Auth";
import ApiService from '../../service/Api.service';
import { Form, Field } from 'react-final-form'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));



const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (values) => {

        login(values).then((data) => {
            // console.log(data);
            // window.alert(JSON.stringify(data, 0, 2));
            if (data.status == 200)
                navigate("/view/home");
            else {
                console.log(data)
                alert("invalid user")
            }
        });
    };


    const validate = (values) => {
        const errors = {}
        if (!values.username) {
            errors.username = 'Required'
        }
        if (!values.password) {
            errors.password = 'Required'
        }
        return errors
    }

    if (0)
        return (<>
            {/* <Styles> */}

            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.username) {
                        errors.username = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ input, meta }) => (
                                <div>
                                    <label>Username</label>
                                    <input {...input} type="text" placeholder="Username" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <div>
                                    <label>Password</label>
                                    <input {...input} type="password" placeholder="Password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
            {/* </Styles> */}</>
        )

    if (1)
        return (<>

            <div className="d-flex flex-column align-content-end">
                <div className="app-auth-body mx-auto">
                    <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html">
                        <img className="logo-icon me-2" src="assets/images/app-logo.svg" alt="logo" /></a></div>
                    <h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
                    <div className="auth-form-container text-start">
                        <Form
                            onSubmit={onSubmit}
                            validate={validate}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit} className="auth-form login-form">
                                    <div className="email mb-3">
                                        <Field name="username">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label className="sr-only" for="signin-email">Username</label>
                                                    <input {...input} type="text" placeholder="Username" className="form-control signin-email" />
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div className="password mb-3">

                                        <Field name="password">
                                            {({ input, meta }) => (
                                                <div>
                                                    <label className="sr-only" for="signin-password">Password</label>
                                                    <input {...input} type="password" placeholder="Password" className="form-control signin-password" />
                                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                                </div>
                                            )}
                                        </Field>
                                        <div className="extra mt-3 row justify-content-between">
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="RememberPassword" />
                                                    <label className="form-check-label" for="RememberPassword">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="forgot-password text-end">
                                                    <a href="reset-password.html">Forgot password?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto" disabled={submitting}  >Log In</button>
                                    </div>

                                    {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                                </form>
                            )}
                        />

                        <div className="auth-option text-center pt-5">No Account? Sign up
                            <Link className="text-link" to="/sign_up">here</Link>.</div>
                    </div>
                </div>

                <footer className="app-auth-footer">
                    <div className="container text-center py-3">
                        <small className="copyright">Designed  for Growing People</small>
                    </div>
                </footer>
            </div>
        </>);
}
export default LoginForm;