import React, { useEffect } from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    return (
        <div className='auth-section'>
            <div className='auth-login-form'>
                <h3>GAME OF<br /> <span>STONES</span></h3>
                <h5>Welcome Back</h5>
                <p className='paragraph'>Signin to continue with Game of Stone</p>
                <AvForm>
                    <AvField name="mobile" placeholder="Mobile" type="text" />
                    <AvField name="otp" placeholder="OTP" type="text" />
                    <AvField name="password" placeholder="Password" type="text" />
                    <button className='btn-hover color-1' onClick={() => navigate('/home')}>Submit</button>
                    <h6 className='mt-4'>Already have an account?<Link to={"/login"}> Login</Link></h6>
                </AvForm>
            </div>
        </div>
    )
}
