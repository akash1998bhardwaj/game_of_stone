import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate = useNavigate();

    return (
        <div className='auth-section'>
            <div className='auth-login-form'>
                <img src={require('../assets/images/game-of-stone.png')} alt='logo' className='logo' />
                <h5>Welcome Back</h5>
                <p className='paragraph'>Signin to continue with Game of Stone</p>
                <AvForm>
                    <AvField name="mobile" placeholder="Mobile" type="text" />
                    <AvField name="otp" placeholder="OTP" type="text" />
                    <AvField name="password" placeholder="Password" type="text" />
                    <button color="primary" onClick={()=>navigate('/leaderboard')}>Submit</button>
                    <h6 className='mt-4'>Already have an account?<Link to={"/login"}> Login</Link></h6>
                </AvForm>
            </div>
        </div>
    )
}
