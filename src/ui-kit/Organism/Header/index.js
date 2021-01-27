import React from 'react'
import Navbar from "ui-kit/Molecule/Navbar";
import SearchForm from "ui-kit/Molecule/SearchForm";
import "ui-kit/Organism/Header/header.css"


const Header = (props) => {
    return ( 
        <div className="header">
            <Navbar />
            <SearchForm onClick={props.onClick}/>
        </div>
     )
}
 



export default Header;