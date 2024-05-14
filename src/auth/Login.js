import React, { useEffect } from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();

    useEffect(() => {
		window.scrollTo(0, 0);
		
	}, [])

    return (
        <div className='auth-section'>
            <div className='auth-login-form'>
                <Link to={"/"}>
                    <img src={require('../assets/images/logo.png')} alt='logo' className='logo' />
                </Link>
                <h5>Welcome Back</h5>
                <p className='paragraph'>Signin to continue with Game of Stone</p>
                <AvForm>
                    <AvField name="mobile" placeholder="Mobile" type="text" />
                    <AvField name="password" placeholder="Password" type="text" />
                    <button color="primary" onClick={() => navigate('/leaderboard')}>Submit</button>
                    <p>Forgot Password</p>
                    <h6>Don’t have an account<Link to={"/signup"}> Signup now</Link></h6>
                </AvForm>
            </div>
        </div>
    )
}
