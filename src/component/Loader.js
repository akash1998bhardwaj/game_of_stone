import React from 'react'

export default function Loader() {
    return (
        <div className='loader_section'>
            <div className='loader_img'>
                <div className='loader_circle'></div>
                <img src={require('../assets/images/logo.png')} />
            </div>
        </div>
    )
}
