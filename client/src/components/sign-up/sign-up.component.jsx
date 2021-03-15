//component for sign out 

import React, {useState} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-botton.components';
import {signUpStart} from '../../redux/user/user.actions';
import {connect} from 'react-redux';
import {
    SignUpContainer,
    SignUpTitle
} from './sign-up.styles.jsx';

const SignUp = ({signUpStart}) => {
    const [userCredetials, setUserCredentials] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const {displayName, email, password, confirmPassword} = userCredetials;


    const handleSubmit = async event =>{
        event.preventDefault();

        if (password !== confirmPassword){
            alert("Password don't match");
            return;
        }
        //call saga to sign up user. props into userCredentials
        signUpStart({displayName, email, password})
    };

    const handleChange = event =>{
        const{name, value} = event.target;
        setUserCredentials({...userCredetials, [name]: value});
    }

        // create the sign up form for new users who want to sign up
        return(
            <SignUpContainer>
                <SignUpTitle>join the crew, create an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                        />
                   
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                        />
                    
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                        />

                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                        />

                        <CustomButton type='submit' >Sign Up</CustomButton>
                </form>
                </SignUpContainer>
        )
    }

const mapDispatchToProps = dispatch =>({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect (null, mapDispatchToProps) (SignUp);