import React from 'react'
import { HeaderTop, HeaderMid, Navbar } from "./style";
import { Link } from 'react-router-dom'

const Header = () => {
    let location = ["Asaka"]
    return (
        <header>
            {/* HEADER TOP START */}
            <HeaderTop>
                <div className="container header__top--inner">
                    {/* HEADER TOP LEFT START */}
                    <div className='header__top--left'>
                        <button className='header__top--left-btn'>
                            <i className='fa-solid fa-location-dot'></i>
                            <p className='header__top--left-desc'>Shahar: <b>{location[0]}</b></p>
                        </button>

                        <div className="header__top--left-inner">
                            <Link to={"/delivery-point"}>Topshirish punktlari</Link>
                        </div>
                    </div>
                    {/* HEADER TOP LEFT END */}

                    {/* HEADER TOP RIGHT START */}
                    <div className="header__top--right">
                        <a className='header__top--right-link' target='_blank' href="https://seller.uzum.uz/?utm_source=uzum&utm_medium=web&utm_campaign=header_link">Uzumda soting</a>
                        <Link to={"/faq"}>Savol-javoblar</Link>
                        <Link to={"/orders"}>Buyurtmalar</Link>

                        {/* LANGUAGE START */}
                        <form>
                            <select value="language">
                                <option name="uz" id="uz">O`zbekcha</option>
                                <option name="ru" id="ru ">Ruscha</option>
                            </select>
                        </form>
                        {/* LANGUAGE END */}
                    </div>
                    {/* HEADER TOP RIGHT END */}
                </div>
            </HeaderTop>
            {/* HEADER TOP END */}

            <div className="container">
                <HeaderMid>Header Mid</HeaderMid>
                <Navbar>Navbar</Navbar>
            </div>
        </header>
    )
}


export default Header