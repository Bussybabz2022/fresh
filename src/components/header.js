import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <div className="header">
            <div>LOGO</div>
            <div className='nav'>
                <Link to='/' className='nav'>Home</Link>
                <Link to='/about' className='nav'>About</Link>
                <Link to='/contact' className='nav'>Contact</Link>
            </div>
        </div>
    )
}

export default Header