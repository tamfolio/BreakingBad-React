import React from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className='center'>
            <img src={logo} alt="" />
            <div className="links">
                <Link to='/'>Characters</Link>
                <Link to="/episodes">Episodes</Link>
                <Link to="/quotes">Quotes</Link>
            </div>
        </header>
    )
}

export default Header
