import React from 'react'
import InputStyle from './Input.module.css'

const Input = ({value, onChange, placeholder}) => {
    return (
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={InputStyle.input}
        />
    )
}

export default Input