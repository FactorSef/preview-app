import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    const { value, onChange } = props;

    const handleChange = ({ target }) => {
        onChange(target.value);
    }

    return <input className="input" type="text" value={value} onChange={handleChange}/>
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: (value) => {},
}

export { Input };
export default Input;