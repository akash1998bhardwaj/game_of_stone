import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Splash() {
    const naviogate = useNavigate();
    const [count, setCount] = useState(4);
    const [per, setPer] = useState(16);
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
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
                <h3>GAME OF<br /> <span>STONES</span></h3>
            </div>
            <div className='loading_section'>
                <div className="loading">



                    <div className='progress-bar-main'>
                        <div className="progress-bar">

                            <div className="progress" style={{ width: `${count}%` }}></div>
                        </div>
                    </div>
                    <div className='progress_text'>
                        <div className="text">Loading...</div>
                        <label className="percent">{count}%</label>
                    </div>
                </div>
            </div>
            <h4 className='play_and_earn'>Play and earn!</h4>
        </div>
    )
}
