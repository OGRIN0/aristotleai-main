import React from 'react';
import { Field } from 'react-final-form'

// const InputCheckbox = (props) => {

//     const { required, name, placeholder, lable, options } = props;
//     return (<>
//         <Field name={name} validate={required}>
//             {({ input, meta }) => (
//                 <div className="mb-3">
//                     <span htmlFor={name}>{lable}</span>
//                     <div className={`form-control form-validtion ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} >
//                         {options.map((option, index) => {
//                             return (
//                                 <>
//                                     <Field key={index} name={name} component="input" type="checkbox" value={option.value} className="form-check-input" >
//                                         {({ input, meta }) => (
//                                             <div>
//                                                 <input {...input} name={name} type="checkbox" id={'checkbox_' + option.value + '_' + index} className="form-check-input"   />
//                                                 <span htmlFor={'checkbox-' + option.value + '-' + index}> {option.label}</span>
//                                             </div>
//                                         )}
//                                     </Field>
//                                 </>
//                             )
//                         })}
//                     </div>
//                 </div>
//             )}
//         </Field>
//     </>);
// }

const InputCheckbox = (props) => {
    const { required, name, placeholder, lable, options } = props;
    return (<>
        <Field name={name} validate={required}>
            {({ input, meta }) => (
                <>
                    <div className="mb-3">
                        <label htmlFor={name}>{lable}</label>
                        <div className={`form-control form-validtion ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} >
                            {options.length ? options.map((option, index) => {
                                return (
                                    <Field key={index} name={name} component="input" value={option.value} type="checkbox" className="form-check-input" >
                                        {({ input, meta }) => (
                                            <div htmlFor={'checkbox_' + option.value + '' + index}>
                                                <lable>
                                                    <input id={'checkbox_' + option.value + '' + index}  {...input} name={name} type="checkbox" className="form-check-input" />
                                                    <span htmlFor={'checkbox_' + option.value + '' + index}> {option.label}</span>
                                                </lable>
                                            </div>
                                        )}
                                    </Field>
                                )
                            }) : ""}
                        </div>
                    </div>
                </>
            )}
        </Field>
    </>);
}

const MyFieldComp = props => {
    console.log(props.someArbitraryOtherProp) // would print 42
    return <input {...props.input} />
}

const InputRadio = (props) => {
    const { required, name, placeholder, lable, options } = props;
    return (<>
        <Field name={name} validate={required}>
            {({ input, meta }) => (
                <>
                    <div className="mb-3">
                        <label htmlFor={name}>{lable} </label>
                        <div className={`form-control form-validtion ${meta.touched ? (meta.error ? "is-invalid" : "is-valid") : ""} `} >
                            {options.length ? options.map((option, index) => {
                                return (
                                    <Field key={index} name={name}  component="select" value={option.value?.toString()} type="radio" className="form-check-input" >
                                        {({ input, meta }) => (
                                            <>
                                                <div>
                                                    <label>
                                                        <input {...input} id={name + "_" + input.value} name={name} type="radio" value={input.value} className="form-check-input" />
                                                        {option.label}
                                                    </label>
                                                </div>
                                            </>
                                        )}
                                    </Field>
                                )
                            }) : ""}
                        </div>
                    </div>
                </>
            )}
        </Field>
    </>);
}

export { InputCheckbox, InputRadio };