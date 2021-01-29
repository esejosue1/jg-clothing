//crating the button component
import React from 'react';
import FormInput from '../form-input/form-input.component';
import './custom-button.scss';

//passing the children to match the input type from sign in
const CustomButton = ({children, isGoogleSignIn,inverted, ...otherProps}) =>(
    // render/check is the user used google sign in to apply styles, if not use the default sign in
    <button className= 
        {`${inverted ? 'inverted' : ''}
        ${isGoogleSignIn ? 'google-sign-in' : ''}
        custom-button`} {...otherProps}>
        {/* putting all of the passed children in the button */}
        {children} 
    </button>
)

export default CustomButton;