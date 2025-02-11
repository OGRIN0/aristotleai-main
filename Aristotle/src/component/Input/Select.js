import React from 'react';
import { Field } from 'react-final-form'

const InputSelect = (props) => {

    var { required, name, placeholder, lable, options } = props;
    return (<>
        <Field name={name} validate={required} component="select"  >
            {({ input, meta }) => (
                <>
                    <div className="form-floating mb-3">
                        <select  {...input} className={`form-control  form-select ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `}>
                            <option value="" >  -- select an option -- </option>
                            {options.length ?options.map((option, index) => {
                                return <option key={index} value={option.value}>{option.label}</option>
                            }):""}
                        </select>
                        <label htmlFor={lable}>{lable} <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                    </div>
                </>
            )}
        </Field>
    </>);
}


const InputMultiSelect = (props) => {

    var { required, name, placeholder, lable, options } = props;
    return (<>
        <Field name={name} validate={required} component="select" multiple  >
            {({ input, meta }) => (
                <>
                    <div className="form-floatingss mb-3">
                        <label htmlFor={lable}>{lable} <div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
                        <select  {...input} className={`form-control form-validtion  form-select ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `}>
                            {options.map((option, index) => {
                                return <option key={index} value={option.value}>{option.label}</option>
                            })}
                        </select>
                    </div>
                </>
            )}
        </Field>
    </>);
}

export { InputSelect, InputMultiSelect };