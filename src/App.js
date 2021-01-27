import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-out/sign-in-and-out.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';


const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


class App extends React.Component{


  //off firebase
  unsubscribeFromAuth=null

  //open subscription, start the cycle
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      // check if the user is signning in
    if(userAuth){
      // get the user ref from the firestore database website
      const userRef=await createUserProfileDocument(userAuth);
      // listen for any changes in the data while logged in
      userRef.onSnapshot(snapshot=>{
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        });    
      });
    }
    // if the user signs out, set the state to null
    else{
    setCurrentUser(userAuth);
    }
    });
  }

  //end the cycle, close the subscription 
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
 render() {
  return (
    <div >
      {/* check to see if the user is logged in */}
      <Header />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={shopPage} />
       <Route path='/signIn' component={SignInAndSignUpPage} />
     </Switch>
    </div>
  );
}
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
