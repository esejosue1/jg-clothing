import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-out/sign-in-and-out.component';
import CheckoutPage from './pages/checkout/checkout.component';
import {selectCurrentUser} from './redux/user/user.selector';

class App extends React.Component{


  //off firebase
  unsubscribeFromAuth=null

  //open subscription, start the cycle
  componentDidMount(){
    
    
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    //   // check if the user is signning in
    // if(userAuth){
    //   // get the user ref from the firestore database website
    //   const userRef=await createUserProfileDocument(userAuth);
    //   // listen for any changes in the data while logged in
    //   userRef.onSnapshot(snapshot=>{
    //     setCurrentUser({
    //       id: snapshot.id,
    //       ...snapshot.data()
    //     });    
    //   });
    // }
    // if the user signs out, set the state to null
    // else{
    // setCurrentUser(userAuth);
    // //values
    // //addCollectionAndDocument('collections', collectionsArray.map(({title,items}) =>({title, items})));
    // }
    // });
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
       {/* move to the pages component */}
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={shopPage} />
       <Route exact path='/checkout' component={CheckoutPage} />
       <Route exact path='/signIn' 
          render={() => this.props.currentUser ? 
          (<Redirect to='/' />) : 
          (<SignInAndSignUpPage />)} />
     </Switch>
    </div>
  );
}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser})


export default connect(mapStateToProps)(App);
