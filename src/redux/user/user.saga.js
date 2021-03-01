import {takeLatest, put, all, call} from 'redux-saga/effects';
import UserActionTypes from "./user.types";
import {auth, googleProvider,createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import {signInFailure, signInSuccess, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from './user.actions';

//obtain the snapshot from the user when loggin 
export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get()
        yield put(
            signInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch(error){
        yield put(signInFailure(error))
    }
}

//google sign in
export function* signInWithGoogle(){
    try{
        const {user}= yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
} catch(error){
    yield put(signInFailure(error))

}
}

//check user with email and pass
export function* signInWithEmail({payload: {email, password}}){
    try {
        const {user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
} catch(error){
    yield put(signInFailure(error))
}
}

//check for user auth.
export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser()
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch(error){
        yield put(signInFailure(error))
    }
};

//user sign out
export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }
    catch(error){
        yield put(signOutFailure(error))
    }
}

//user sign up
export function* signUp({payload:{email, password, displayName} }){
    try{
        // creates a new user and account with the email, pass. 
        const {user} = yield auth.createUserWithEmailAndPassword(
        email, password);
    
    yield put(signUpSuccess({user, additionalData:{displayName}}))
    }catch(error){
        yield put(signUpFailure(error))
    }
}

//user sign in after signing up
export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};


export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};

export function* onSignOutStart (){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
};

export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}


//call each saga
export function* userSagas(){
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
};