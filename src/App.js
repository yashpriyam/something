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
    // console.log(props);
    super(props);
    this.state = {
      monsters: [{name: 'Girish i R', 
        id: 1, 
        email: 'girishce4455@gmail.com',
        link: 'new',
        task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
        resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx',
        Email: " ",
        First_Name: "First_Name ",
        Last_Name:"Last_Name ",
        Phone_Number:" Phone_Number",
        IP: 'IP',
        Edit_Link:"Edit_Link"},
        {name: 'Sivakumar Manickam', 
        id: 2, 
        email: 'siv14.man@gmail.com',
        link: 'newline',
        task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
        resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'},
        {name: 'Gourab Sen', 
        id: 36, 
        email: 'gsen42272@gmail.com', 
        task: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/23_Sowjanya Atyam.docx', 
        resume: 'https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx'}
        ]
    }
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
    const { monsters } = this.state;
    return (
      <div className='App'>
        <h1>Profile Tracker</h1>
        <Switch>
            <Route exact path='/' component={ HomePage }></Route>
            {monsters.map(monster => 
              <Route key={monster.id} exact path={`/${monster.id}/${monster.name}`} component={ Form }></Route>
              )}
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
