import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(false);
    const [profile, setProfile] = useState(undefined)

    const menuToggle = () => {
        setToggle(!toggle);
    };

    const closeMenu = () => {
        setToggle(false);
    };

    useEffect(() => {
        let img = localStorage.getItem('user');
        console.log('user img', img)
        setProfile(img)
    }, [])

    useEffect(() => {
        if (toggle) {
            document.querySelector('.App').classList.add('active');
        } else {
            document.querySelector('.App').classList.remove('active');
        }


        return () => {
            document.querySelector('.App').classList.remove('active');
        };
    }, [toggle]);


    return (
        <header className='header-section p-l-r'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2'>
                        <div className='logo-section'>
                            <Link to={"/leaderboard"}>
                                <div className='header_user_box'>
                                    <img src={require('../assets/images/user_img.png')} alt='logo' />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='logo-name-middle'>
                            <h3>game of STONS</h3>
                        </div>
                    </div>
                    <div className='col-2'>
                        {/* <div className='toggle_menu'>
                            <div className='right_memu'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div> */}
                        <ul className='menu_right_section'>

                            {/* <li><button onClick={() => navigate('/profile-theme')}><img src={profile ? profile : require('../assets/images/profile.png')} /></button></li>
                            <li><button onClick={() => navigate('/coins')}><img src={require('../assets/images/coin.png')} /></button></li>
                            <li><button><img src={require('../assets/images/setting.png')} /></button></li> */}
                            <li><button onClick={() => menuToggle()}><img src={require('../assets/images/menu.png')} /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={toggle ? 'toogle_menu_slider active' : 'toogle_menu_slider'}>
                <div className='head_menu'>
                    <button onClick={() => setToggle(false)}><img src={require('../assets/images/cross.png')} /></button>
                </div>
                <div className='profile_mm' onClick={() => navigate('/profile-theme')}>
                    <div className='profile_img_mm'>
                        <img src={profile ? profile : require('../assets/images/avatars/2.png')} />
                        <label className='choose_picture_img'>
                            <img src={require('../assets/images/pencil.png')} />
                        </label>
                    </div>
                    <h4>Akash Bhardwaj</h4>
                </div>
                <ul className='menu_list'>
                    <li><Link>Leaderboard</Link></li>
                    <li><Link>Coins</Link></li>
                    <li><Link>Quiz</Link></li>
                    <li><Link>Category</Link></li>
                    <li><Link>Setting</Link></li>

                </ul>
            </div>
        </header>
    )
}
