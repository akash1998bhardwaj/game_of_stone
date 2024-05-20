import React, { useEffect } from 'react'
import Header from '../component/Header'

export default function Winner() {


    
    useEffect(() => {
		window.scrollTo(0, 0);
		
	}, [])
    
    return (
        <div className='dashboard_screen dashboard_screen_winner'>
            <Header />
            <div className='dashboard_section'>
                <div className='dash_board'>
                    <ul className='list_item'>
                        <li><button className='active'>All Time</button></li>
                        <li><button>Weekly</button></li>
                        <li><button>24 Hours</button></li>
                    </ul>
                    <div className='top_three_win'>
                        <div className='div_first lavel_user'>
                            <div className='frame_img_box'>
                                <img src={require('../assets/images/second.png')} alt='profile-user' className='frame_img' />
                                <img src={require('../assets/images/avatars/1.png')} className='user_img' alt='profile-user' />
                            </div>
                            <div>
                                <p>Akash Bhardwaj</p>
                                <span>112144</span>
                                {/* <h5>(2)</h5> */}
                            </div>
                        </div>
                        <div className='div_secont lavel_user'>
                            <div className='frame_img_box'>
                                <img src={require('../assets/images/first.png')} alt='profile-user' className='frame_img' />
                                <img src={require('../assets/images/avatars/2.png')} className='user_img' alt='profile-user' />
                            </div>


                            <div>
                                <p>Abhishek Goldy</p>
                                <span>200000</span>
                                {/* <h2>(1)</h2> */}
                            </div>
                        </div>
                        <div className='div_first lavel_user'>
                            <div className='frame_img_box'>
                                <img src={require('../assets/images/third.png')} alt='profile-user' className='frame_img' />
                                <img src={require('../assets/images/avatars/3.png')} className='user_img' alt='profile-user' />
                            </div>
                            <div>
                                <p>Sandeep sagar</p>
                                <span>40000</span>
                                {/* <h5>(3)</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='user_list'>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                4
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/4.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Kartik</p>
                                    <span>112144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                5
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/5.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Sunil</p>
                                    <span>11002144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                6
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/6.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Rahul</p>
                                    <span>9000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                7
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/7.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Charu</p>
                                    <span>2000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                8
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/8.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Vikash</p>
                                    <span>12000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                9
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/9.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Kajal</p>
                                    <span>120030</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                10
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/10.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Vinod Kumar</p>
                                    <span>11002144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                4
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/4.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Kartik</p>
                                    <span>112144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                5
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/5.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Sunil</p>
                                    <span>11002144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                6
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/6.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Rahul</p>
                                    <span>9000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                7
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/7.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Charu</p>
                                    <span>2000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                8
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/8.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Vikash</p>
                                    <span>12000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                9
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/9.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Kajal</p>
                                    <span>120030</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                10
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/10.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Vinod Kumar</p>
                                    <span>11002144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                4
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/4.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Kartik</p>
                                    <span>112144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                5
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/5.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Sunil</p>
                                    <span>11002144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                6
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/6.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Rahul</p>
                                    <span>9000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                7
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/7.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Charu</p>
                                    <span>2000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                8
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/8.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Vikash</p>
                                    <span>12000</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                9
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/9.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Kajal</p>
                                    <span>120030</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                10
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/10.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Vinod Kumar</p>
                                    <span>11002144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>

                    </div>
                    <div className='user_list fiexd_user_profile'>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                20
                            </div>
                            <div className='user_profile'>
                                <div className='picture_img'>
                                    <img src={require('../assets/images/avatars/4.png')} alt='profile-user' />
                                </div>
                                <div className='prifile_content'>
                                    <p>Akash Bhar... (You)</p>
                                    <span>112144</span>
                                </div>
                            </div>
                            <div className='level_box'>
                                <p>Level</p>
                                <span>22345</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
