//component for signing in the user

import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-botton/custom-botton.components';
import './sign-in.styles.scss';
import {connect} from "react-redux";
import {googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'; 

//store the users inputed email
class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:''
        }
    }


    handleSubmit = async event =>{
        event.preventDefault();
        const {emailSignInStart} = this.props;
        const {email, password}=this.state;
        emailSignInStart(email, password)
    }
    //target the name with the inputed value
    //for example, email, what email they typed is the value
    handleChange = event =>{
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        const{googleSignInStart} = this.props
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange} 
                    value={this.state.email} 
                    label='email'
                    required />
                    
                    <FormInput
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);