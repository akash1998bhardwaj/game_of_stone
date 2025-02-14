import React from 'react'
import Header from '../component/Header'

export default function Dashboard() {
    return (
        <div className='dashboard_screen'>
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
                            </div>
                        </div>
                    </div>
                    <div className='user_list'>
                        <div className='list_item_box'>
                            <div className='number_level'>
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
                                3
                            </div>
                            <div className='user_profile'>
                                <img src={require('../assets/images/profile-user.png')} alt='profile-user' />
                                <div className='prifile_content'>
                                    <p>Akash Bhardwaj</p>
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
