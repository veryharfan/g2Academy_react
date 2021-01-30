import React from 'react'
import BtnStyle from './Button.module.css'
import PropTypes from 'prop-types'

function Button({ children, typeStyle, className, type, onClick, disabled}) {
    // const cn = typeStyle ==="primary" ? BtnStyle.primary : BtnStyle.secondary
    const cn = BtnStyle[typeStyle]
    return (
        <button 
          className={`${BtnStyle.btn} ${cn} ${className}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
          >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    typeStyle: PropTypes.oneOf(['primary', 'secondary']),
    className: PropTypes.string, 
    type: PropTypes.string
}

Button.defaultProps =  {
    typeStyle: 'primary',
    disabled: false
}

export default Button