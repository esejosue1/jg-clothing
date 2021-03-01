//a reducer is a funct that receives 2 parameters: state, action
//listens the user actions

import UserActionTypes from './user.types';
const INITIAL_STATE={
    currentUser: null,
    error: null
}

const userReducer=(state=INITIAL_STATE, action) =>{
    switch(action.type){

        case UserActionTypes.SIGN_IN_SUCCESS:
        return{
            ...state,
            currentUser: action.payload,
            error:null
        };

        case UserActionTypes.SIGN_OUT_SUCCESS:
            return{
                ...state,
                currentUser: null,
                error:null
            };
        
        case UserActionTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
                currentUser:action.payload,
                error:null
            }


        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}

export default userReducer;