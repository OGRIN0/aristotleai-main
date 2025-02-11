import React, { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form'
// import ApiService from '../../Api.service.jsx';
import { Outlet, Link, useNavigate } from "react-router-dom";
import ApiService from '../../service/Api.service';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}
const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)


export default function AccEntry() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const testApi = async () => {
        // Test Get DATA
        try {
            setLoading(true);
            const usersData = await ApiService.httpGet('/users', 'https://jsonplaceholder.typicode.com');
            setUsers(usersData);
            setLoading(false);
        } catch (err) {
            console.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
       
    }

    useEffect(() => {
        testApi();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <div className="row">
                            <div className="col">
                                <h4 className="page-title">Accounts</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="./">Accounts</Link></li>
                                    <li className="breadcrumb-item"><Link to="./">Entry</Link></li>
                                    <li className="breadcrumb-item active">insert</li>
                                </ol>
                            </div>{/*end col*/}
                        </div>{/*end row*/}
                    </div>{/*end page-title-box*/}
                </div>{/*end col*/}
            </div>

            <Form onSubmit={onSubmit}>
                {
                    ({ handleSubmit, form }) => {
                        // here we can do form.batch()
                        return <form onSubmit={handleSubmit}>
                            fields here
                        </form>
                    }
                }
            </Form>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <div className="card">
                        <form onSubmit={handleSubmit} className="row g-3 needs-validation form-floating card-body" >
                            <h5 className="card-title">Entry Input</h5>
                            <hr />
                            <div className="col-md-4">
                                <Field name="firstName" validate={required}>
                                    {({ input, meta }) => (
                                        <>
                                            <div className="form-floating mb-3">
                                                <input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder="name@example.com" />
                                                <label htmlFor="floatingInput">First Name <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                                            </div>
                                        </>
                                    )}
                                </Field>
                            </div>
                            <div className="col-md-4">
                                <Field name="lastName" validate={required}>
                                    {({ input, meta }) => (
                                        <div className="form-floating mb-3">
                                            <input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Last Name <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="col-md-4">
                                <Field name="favoriteColor" component="select" validate={required} >
                                    {({ input, meta }) => (
                                        <>
                                            <div className="form-floating mb-3">
                                                <select  {...input} className={`form-control  form-select ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `}>
                                                    <option value selected>  -- select an option -- </option>
                                                    <option value="#ff0000">❤️ Red</option>
                                                    <option value="#00ff00">💚 Green</option>
                                                    <option value="#0000ff">💙 Blue</option>
                                                </select>
                                                <label for="floatingInput">Selects <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>

                                                {/* <label for="floatingSelect">Works with selects</label> */}
                                            </div>
                                        </>)}
                                </Field>
                            </div>
                            <div className="col-md-4">
                                <Field
                                    name="age"
                                    validate={composeValidators(required, mustBeNumber, minValue(18))}
                                >
                                    {({ input, meta }) => (
                                        <div className="form-floating mb-3">
                                            <input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder="name@example.com" />
                                            <label for="floatingInput">Age <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                                        </div>
                                    )}
                                </Field></div>
                            <div className="buttons">
                                <button type="submit" className={`btn btn-primary ${submitting ? "" : " "}`}>
                                    Submit
                                </button>

                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                    className="btn "  >
                                    Reset
                                </button>
                            </div>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    </div>
                )} />

        </>
    );


}; 