import React from 'react';
import { Form, Field } from 'react-final-form'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { InputSelect, InputText, InputMultiSelect, InputCheckbox, InputRadio, InputTextarea } from '../../component/Input/';
import { required, mustBeNumber, minValue, maxValue, composeValidators } from '../../service/FormValidate.service'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}

const options = [{ "value": "red", label: "Red" }, { "value": "blue", label: "Blue" }, { "value": "green", label: "Green" }];

export default function LedgerList() {
    var initalData = {
        "checkboxtest": [
            "blue"
        ],
        "testInput": "blue",
        "firstName": "22",
        "textarea": "fas",
        "lastName": "44",
        "country": "red",
        "country23": [
            "green"
        ],
        "age": "2"
    };
    initalData = {};
    // return (<><h1>WElcome all </h1></>)
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
            <Form
                onSubmit={onSubmit}
                initialValues={initalData}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <div className="card ">
                        <form onSubmit={handleSubmit} className="row g-3 needs-validation form-floating card-body" >
                            <h5 className="card-title">Entry Insert</h5>
                            <hr />
                            <div className="col-md-4">
                                <InputText   name="firstName" required={required} lable="First Name" placeholder="First Name" ></InputText>
                                <InputTextarea name="textarea" required={required} lable="Textarea" placeholder="Textarea" ></InputTextarea>
                                <InputCheckbox name="checkboxtest" required={required} lable="Country Name" placeholder="Country Name" options={options} ></InputCheckbox>
                                <InputRadio name="testInput" required={required} lable="country2222 Name" placeholder="country2222 Name" options={options} ></InputRadio>
                            </div>
                            <div className="col-md-4">
                                <InputText name="lastName" required={required} lable="Last Name" placeholder="Last Name" ></InputText>
                                <InputSelect name="country" required={required} lable="Country Name" placeholder="Country Name" options={options} ></InputSelect>
                                <InputMultiSelect name="country23" required={required} lable="Country Name" placeholder="Country Name" options={options} ></InputMultiSelect>
                            </div>
                            <div className="col-md-4">
                                <InputText name="age" required={composeValidators(required, mustBeNumber, minValue(18), maxValue(100))} lable="Age" placeholder="Age" ></InputText>
                                <Field
                                    name="age"
                                    validate={composeValidators(required, mustBeNumber, minValue(18))}
                                >
                                    {({ input, meta }) => (
                                        <div className="form-floating mb-3">
                                            <input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Age <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="buttons">
                                <button type="submit" className={`btn btn-primary ${submitting ? "" : " "}`}
                                >
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
            <br />
        </>
    );
}