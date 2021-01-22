import React ,{useState} from 'react'
import'./Header.css' 
const Header = ({title}) => {

    return (
        <div>
            <h3 className="head">{title}</h3>
        </div>
    )
}

export default Header
