//component for signing in the user

import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-botton.components';
import './sign-in.styles.scss';
import {connect} from "react-redux";
import {googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'; 

//store the users inputed email
const SignIn = ({emailSignInStart, googleSignInStart}) =>{
    const [userCredentials, setCredentials] = useState({email: '', password:''})
    const {email, password}=userCredentials;

    const handleSubmit = async event =>{
        event.preventDefault();
        emailSignInStart(email, password)
    }

    //target the name with the inputed value
    //for example, email, what email they typed is the value
    const handleChange = event =>{
        const {value, name} = event.target;
        setCredentials({...userCredentials, [name]: value})
    }

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    
                    <FormInput
                    name='email' 
                    type='email' 
                    handleChange={handleChange} 
                    value={email} 
                    label='email'
                    required />
                    
                    <FormInput
                        name='password' 
                        type='password' 
                        value={password} 
                        handleChange={handleChange}
                        label='password'
                        required />
                        
                    <div className='buttons'>    
                    {/* Applying the button component with its children */}
                    <CustomButton type='submit'> Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);