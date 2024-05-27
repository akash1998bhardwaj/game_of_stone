import React, { useEffect } from 'react'
import Header from '../component/Header'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Footer from '../component/Footer';

export default function Leaderboard() {



    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.scroll_box_right', {
            opacity: 0,
            x: 100,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.scroll_box_right',
                start: 'top 90%', // Start the animation when the top of the element hits 80% of the viewport height
                toggleActions: 'play none none none',
            },
        });

    })

    return (
        <div className='dashboard_screen dashboard_screen_winner'>
            <Header />
            <div className='dashboard_section'>
                <div className='dash_board'>
                    {/* <ul className='list_item'>
                        <li><button className='active'>All Time</button></li>
                        <li><button>Weekly</button></li>
                        <li><button>24 Hours</button></li>
                    </ul> */}
                    <div className='heading-leader-page'>
                      <h4>Leaderboard</h4>
                    </div>
                    <div className='top_three_win'>
                        <div className='div_first lavel_user'>
                            <div className='frame_img_box'>
                                <img src={require('../assets/images/second.png')} alt='profile-user' className='frame_img' />
                                <img src={require('../assets/images/avatars/1.png')} className='user_img' alt='profile-user' />
                            </div>
                            <div>
                                <p>Aisha</p>
                                <span>Rank</span>
                                <h5>(2<sup>nd</sup>)</h5>
                            </div>
                        </div>
                        <div className='div_secont lavel_user'>
                            <div className='frame_img_box'>
                                <img src={require('../assets/images/first.png')} alt='profile-user' className='frame_img' />
                                <img src={require('../assets/images/avatars/2.png')} className='user_img' alt='profile-user' />
                            </div>


                            <div>
                                <p>Sandy</p>
                                <span className='first_span'>Rank</span>
                                <h2>(1<sup>st</sup>)</h2>
                            </div>
                        </div>
                        <div className='div_first lavel_user'>
                            <div className='frame_img_box'>
                                <img src={require('../assets/images/third.png')} alt='profile-user' className='frame_img' />
                                <img src={require('../assets/images/avatars/3.png')} className='user_img' alt='profile-user' />
                            </div>
                            <div>
                                <p>David </p>
                                <span>Rank</span>
                                <h5>(3<sup>rd</sup>)</h5>
                            </div>
                        </div>
                    </div>
                    <div className='user_list'>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>4</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/4.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Mohamed</p>
                                    {/* <span>112144</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>90876</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>5</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/5.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Nadia</p>
                                    {/* <span>1340</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>86543</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p> 6</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/6.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Lucky</p>
                                    {/* <span>1</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>56789</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>7</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/7.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Felix </p>
                                    {/* <span>2000</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>45678</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>8</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/8.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>David </p>
                                    {/* <span>12000</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>43454</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>9</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/9.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Elena </p>
                                    {/* <span>120030</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>37546</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>10</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/10.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Tatiana </p>
                                    {/* <span>11002144</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>35007</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>11</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/4.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Jamal</p>
                                    {/* <span>112144</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>30000</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>12</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/5.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Maria </p>
                                    {/* <span>11002144</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>24567</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>13</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/6.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Sofia </p>
                                    {/* <span>9000</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>14</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/7.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Keiko </p>
                                    {/* <span>2000</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>18454</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>15</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/8.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Ibrahim</p>
                                    {/* <span>12000</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>15676</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>16</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/9.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Sami</p>
                                    {/* <span>120/030</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>12345</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>17</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/10.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Aisha</p>
                                    {/* <span>11002144</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>10344</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>18</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/4.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Layla</p>
                                    {/* <span>112144</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>2456</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>19</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/5.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Sara</p>
                                    {/* <span>11002144</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>1567</span>
                            </div>
                        </div>
                        <div className='list_item_box scroll_box_right'>
                            <div className='number_level'>
                                <p>20</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/6.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Ethan </p>
                                    {/* <span>9000</span> */}
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <span>1000</span>
                            </div>
                        </div>
                       

                    </div>
                    <div className='user_list fiexd_user_profile '>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                <p>4</p>
                                <span>Rank</span>
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/4.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Mohamed (You)</p>
                                   
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Stones</p>
                                <h5>90876</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
