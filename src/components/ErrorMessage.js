import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({errorMessage}) => (

<p>{errorMessage}</p>


);

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string.isRequired

};

export default ErrorMessage
