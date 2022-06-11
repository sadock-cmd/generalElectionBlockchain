import React from 'react'

const Navbar = ({account}) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark shadow mb-5">
               <p className="navbar-brand my-auto">Election</p>
               <ul className="navbar-nav">
                 <li className="nav-item text-white">{ account }</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
