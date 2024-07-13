import React from 'react'
import { NavbarMenu } from './style'
import { navbarItems } from '../Header'
import { Link } from 'react-router-dom'

const NavbarModal = () => {
  return (
    <NavbarMenu>
        <div className="container">
            {/* MODAL LEFT START */}
            <div className='navbar__modal--left'>
                <ol className='navbar__modal--left-list'>
                    {navbarItems.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link to={item.link}> 
                                    <div className='navbar__modal--left-link--inner'>
                                        <img src={item.image} alt={item.title}  width={"32px"} height={"32px"}/>
                                        <h5>{item.title}</h5>
                                    </div>

                                    {/* <i className='fa-solid fa-arrow-right fa-fade'></i> */}
                                    <i className="fa-solid fa-angle-up fa-rotate-90"></i>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
            {/* MODAL LEFT END */}
        </div>
    </NavbarMenu>
  )
}

export default NavbarModal