import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='auth-section'>
            <div className='auth-login-form'>
                <img src={require('../assets/images/game-of-stone.png')} alt='logo' className='logo' />
                <h5>Welcome Back</h5>
                <p className='paragraph'>Signin to continue with Game of Stone</p>
                <AvForm>
                    <AvField name="mobile" placeholder="Mobile" type="text" />
                    <AvField name="password" placeholder="Password" type="text" />
                    <button color="primary">Submit</button>
                    <p>Forgot Password</p>
                    <h6>Don’t have an account<Link to={"/signup"}> Signup now</Link></h6>
                </AvForm>
            </div>
        </div>
    )
}
