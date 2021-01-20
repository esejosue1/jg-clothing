import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import shopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
const HatsPage = () =>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <div >
      <Header />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path='/shopPage' component={shopPage} />
     </Switch>
    </div>
  );
}

export default App;
