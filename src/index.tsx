import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, About, Collection, Gallery, SignIn } from './components';
import './style.css';
// import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Contact } from './components/Contact';


const my_title = "Live Free and Ride On!!!"

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}> */}
    <Provider store={store}>
    <Router>
      <Switch>

      <Route exact path="/">
          <Home title={my_title}/>
        </Route>
        <Route path='/Collection'>
          <Collection></Collection>
        </Route> 
        <Route path='/Contact'>
          <Contact></Contact>
        </Route>
        <Route path='/About'>
          <About></About>
          </Route>
        <Route path='/SignIn'>
          <SignIn></SignIn>
        </Route>
        <Route path='/Gallery'>
          <Gallery></Gallery>
        </Route>  


      </Switch>
    </Router>
    </Provider>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


