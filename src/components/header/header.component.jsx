import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';


import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
      {
        currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          <label>Signed In: {currentUser.email}</label>
          <CustomButton>SIGN OUT</CustomButton>
        </div>
      ) : (
        <Link className='option' to='/signin'>
          <CustomButton>SIGN IN</CustomButton>
        </Link>
      )}
  </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});



  
export default connect(mapStateToProps)(Header);