import React from 'react';
import PropTypes from 'prop-types';

import './Textarea.css';

function Textarea({ name, text }) {
    return (<div className="textarea">
        <label htmlFor={name}>{text}</label>
        <textarea name={name} id={name}></textarea>
    </div>);
}

Textarea.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
};


export default Textarea;
