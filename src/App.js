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
import {checkUserSession} from './redux/user/user.actions';
class App extends React.Component{


  //off firebase
  unsubscribeFromAuth=null

  //check for the user session
  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
    
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

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
