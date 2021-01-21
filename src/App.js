import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-out/sign-in-and-out.component';
import {auth} from './firebase/firebase.utils';


const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  //off firebase
  unsubscribeFromAuth=null

  //open subscription, start the cycle
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
      console.log(user)
    })
  }

  //end the cycle, close the subscription 
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
 render() {
  return (
    <div >
      {/* check to see if the user is logged in */}
      <Header currentUser={this.state.currentUser} />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shop' component={shopPage} />
       <Route path='/signIn' component={SignInAndSignUpPage} />
     </Switch>
    </div>
  );
}
}

export default App;
