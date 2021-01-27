//a reducer is a funct that receives 2 parameters: state, action

const INITIAL_STATE={
    currentUser: null
}

const userReducer=(state=INITIAL_STATE, action) =>{
    switch(action.type){
        case 'SET_CURRENT_USER':
        return{
            ...state,
            currentUser: action.payload
        }
    
        default:
            return state;
    }
}

export default userReducer;