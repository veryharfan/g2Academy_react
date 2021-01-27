import React from 'react'
import Button from "ui-kit/Atom/Button"
import Image from "ui-kit/Atom/Image"
import logo from "logo.svg"

function Navbar() {
    return (
        <div className="navbar">
            <Image src={logo} alt="" className="logo" />
            <Button typeStyle="secondary">Home</Button>
            <Button typeStyle="secondary">Profile</Button>
            <Button typeStyle="secondary">Friends</Button>
        </div>
    )
}

export default Navbar