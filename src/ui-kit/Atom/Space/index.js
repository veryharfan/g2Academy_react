import React from 'react';
import PropTypes from 'prop-types';
import './Space.css'

const Space = ({ space }) => {
    const className = `mb${space}`
    return <div className={className} />
}

Space.propTypes = {
    space: PropTypes.oneOf(['1', '2', '3', '4', '5'])
}

export default Space