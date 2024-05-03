import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Splash() {
    const naviogate = useNavigate();
    const [count, setCount] = useState(4);
    const [per, setPer] = useState(16);
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            naviogate('/login')
        }, 4000)
    }, [])
    useEffect(() => {
        setLoading(setInterval(animate, 50));
        return () => clearInterval(loading);
    }, []);

    const animate = () => {
        if (count >= 100) {
            clearInterval(loading);
        } else {
            setPer((prevPer) => prevPer + 3);
            setCount((prevCount) => (prevCount >= 96 ? 100 : prevCount + 1));
        }
    };

    return (
        <div className='splash-screen'>
            <div className='logo-section'>
                <img src={require('../assets/images/game-of-stone.png')} alt='logo' />
            </div>
            <div className='loading_section'>
                <div className="loading">
                    <div className="text">Loading...</div>

                    <div className='progress-bar-main'>
                        <div className="progress-bar">
                            <label className="percent">{count}%</label>
                            <div className="progress" style={{ width: `${per}px` }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
