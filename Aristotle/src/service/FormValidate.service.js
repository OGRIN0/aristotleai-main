
import * as React from "react";
 
const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = min => value =>
    isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const maxValue = max => value =>
    isNaN(value) || value <= max ? undefined : `Should be Lesster than ${max}`

const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined)
    
export {required,mustBeNumber, minValue,maxValue,composeValidators};
