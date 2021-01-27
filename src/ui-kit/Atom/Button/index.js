import React from 'react'
import BtnStyle from './Button.module.css'
import PropTypes from 'prop-types'

function Button({ children, typeStyle, className, type}) {
    const cn = typeStyle ==="primary" ? BtnStyle.primary : BtnStyle.secondary
    return (
        <button 
          className={`${BtnStyle.btn} ${cn} ${className} ${typeStyle}`}
          type={type}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    typeStyle: PropTypes.oneOf(['primary', 'secondary']),
    className: PropTypes.string
}

Button.defaultProps =  {
    typeStyle: 'primary'
}

export default Button