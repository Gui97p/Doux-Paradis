import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

function Input({ type, name, text, placeholder, customClass }) {
    return (<div className={`input ${customClass}`}>
        <label htmlFor={name}>{text}</label>
        <input type={type} 
            name={name} 
            id="name" 
            placeholder={placeholder}
        />
    </div>);
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    customClass: PropTypes.string,
}.isRequired;

export default Input;
