import React from 'react';
import PropTypes from 'prop-types';
import SpcStyle from './Space.module.css'

const Space = ({ space }) => {
    const className = `mb${space}`
    return <div className={`${SpcStyle[className]}`} />
}

Space.propTypes = {
    space: PropTypes.oneOf(['1', '2', '3', '4', '5'])
}

export default Space