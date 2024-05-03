import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();

    return (
        <header className='header-section p-l-r'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='logo-section'>
                            <Link to={"/leaderboard"} className='shine'>
                                <img src={require('../assets/images/game-logo.png')} alt='logo' />
                            </Link>
                        </div>
                    </div>
                    <div className='col-6'>
                        {/* <div className='toggle_menu'>
                            <div className='right_memu'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div> */}
                        <ul className='menu_right_section'>

                            <li><button onClick={()=>navigate('/profile-theme')}><img src={require('../assets/images/profile.png')} /></button></li>
                            <li><button><img src={require('../assets/images/coin.png')} /></button></li>
                            <li><button><img src={require('../assets/images/setting.png')} /></button></li>
                            <li><button><img src={require('../assets/images/menu.png')} /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
