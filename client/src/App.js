import React, {useEffect} from 'react';
import {GlobalStyle} from './global.styles';
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


const App = ({checkUserSession, currentUser})=>{

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])


  
  return (
    <div >
      <GlobalStyle />
      {/* check to see if the user is logged in */}
      <Header />
     <Switch>
       {/* move to the pages component */}
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={shopPage} />
       <Route exact path='/checkout' component={CheckoutPage} />
       <Route exact path='/signIn' 
          render={() => currentUser ? 
          (<Redirect to='/' />) : 
          (<SignInAndSignUpPage />)} />
     </Switch>
    </div>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser})

const mapDispatchToProps = dispatch =>({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
