import React from 'react';
import PropTypes from 'prop-types';

const Textarea = (props) => {
    const { value, rows, onChange } = props;

    const handleChange = ({ target }) => {
        onChange(target.value);
    }

    return <textarea className="textarea" rows={rows} value={value} onChange={handleChange} />
};

Textarea.propTypes = {
    value: PropTypes.string.isRequired,
    rows: PropTypes.number,
    onChange: (value) => {},
}

Textarea.defaultProps = {
    row: 6,
}

export { Textarea };
export default Textarea;