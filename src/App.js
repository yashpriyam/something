import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Form from './components/form/form';
import { connect } from 'react-redux';

import HomePage from './components/Homepage/homepage.pages';
// import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';

class App extends Component {
  constructor(props){
    console.log(props);
    super(props);
  }
  unsubscribeFromAuth = null;

  //for user based session storage
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className='App'>
        <h1>Profile Tracker</h1>
        <Switch>
            <Route exact path='/' component={ HomePage }></Route>
            {this.props.monsters.map(monster => 
            <Route exact path={`/${monster.id}/${monster.name}`} component={ Form }></Route>)}
            {/* ${this.props.monster.id}/${this.props.monster.name} */}
            <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user: {currentUser}, candidates: { monsters } }) => ({
  currentUser,
  monsters
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
