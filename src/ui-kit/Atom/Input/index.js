import React from 'react'

const Input = ({value, onChange, placeholder}) => {
    return (
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
    )
}

export default Input