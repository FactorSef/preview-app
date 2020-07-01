import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Button = (props) => {
    const { children, ...rest } = props;

return <button className="button" type="button" {...rest}>{children}</button>
};

Button.propTypes = {
    children: PropTypes.any,
    onClick: () => {},
};

export { Button };
export default Button;