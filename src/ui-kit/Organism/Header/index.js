import React from 'react'
import Navbar from "ui-kit/Molecule/Navbar";
import SearchForm from "ui-kit/Molecule/SearchForm";
import HeaderStyle from "ui-kit/Organism/Header/Header.module.css"


const Header = (props) => {
    return ( 
        <div className={`${HeaderStyle.header}`}>
            <Navbar />
            <SearchForm onClick={props.onClick}/>
        </div>
     )
}
 



export default Header;