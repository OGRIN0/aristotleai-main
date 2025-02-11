import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'

const InputText = (props) => {
 
	var {  required ,name ,placeholder ,lable } = props;
	return (<>
		<Field name={name} validate={required}>
			{({ input, meta }) => (
				<>
					<div className={"form-floating   mb-3"}>
						<input {...input} type="text" className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder={placeholder}  />
						<label htmlFor="floatingInput">{lable}<div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
					</div>
				</>
			)}
		</Field>
	</>);
}

const InputTextarea = (props) => {
 
	var {  required ,name ,placeholder ,lable } = props;
	return (<>
		<Field name={name} validate={required}>
			{({ input, meta }) => (
				<>
					<div className="form-floating mb-3">
						<textarea {...input}   className={`form-control ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} id="floatingInput" placeholder={placeholder}  >	
						</textarea>
						<label htmlFor="floatingInput">{lable}<div className={`invalid-feedback ${meta.error ? "d-inline" : ""} `} > {meta.error && meta.touched && <span>({meta.error})</span>}</div> </label>
					</div>
				</>
			)}
		</Field>
	</>);
}

export   {InputText, InputTextarea};