import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect } from 'react-redux';

import './App.css';

import HomePage from  './pages/homepage/homepage.component';
import ShopPage from  './pages/shop/shop.component';

import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser }  from './redux/user/user.action'

const HatsPage = () => (
<div>
  <h1>HATS PAGE </h1>
</div>
);

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = { 
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    // add callback when auth state changed.
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          
          userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
              // this.setState( {
                
              // }, () => {
              //   console.log(this.state);
              // })
            // console.log(this.state);
          });
        }
        //this.setState({ currentUser:userAuth});
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() { 
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'
            render={ () =>
              this.props.currentUser ? 
              (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)
            }
          />
  
        </Switch>
      </div>
    );
  }  
}


const mapStateToProps = ( {user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToRops = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToRops)(App);
