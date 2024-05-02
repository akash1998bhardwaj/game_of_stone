import React from 'react'

export default function Header() {
    return (
        <header className='header-section p-l-r'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='logo-section'>
                            <img src={require('../assets/images/game-of-stone.png')} alt='logo' />
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='toggle_menu'>
                            <div className='right_memu'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
