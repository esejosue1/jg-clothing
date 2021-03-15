//crating the button component
import React from 'react';
import {CustomBottonContainer} from './custom-button.styles';

//passing the children to match the input type from sign in
const CustomButton = ({children, ...props}) =>(
    <CustomBottonContainer {...props} > {children}</CustomBottonContainer>
)

export default CustomButton;