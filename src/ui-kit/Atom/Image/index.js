import React from 'react'
import ImgStyle from './Image.module.css'

function Image({src, alt, className}) {
    return (
        <img className={`${ImgStyle[className]}`} src={src} alt={alt} />
    )
}

export default Image