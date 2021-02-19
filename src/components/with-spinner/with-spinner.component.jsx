//with spinner component higer order
import React from 'react';

import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

//if isLoading=true, run loading animation, false=run as normal with all prev props
const withSpinner = WrappedComponent =>{
    const Spinner = ({isLoading, ...otherProps}) =>{
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    );
}
return Spinner;
};

export default withSpinner;