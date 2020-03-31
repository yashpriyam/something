import React from 'react';
import { connect } from 'react-redux';
import Card from '../card/card.component';
import './card-list.styles.css';
import { candidates } from '../../redux/candidates/candidates.actions';

class CardList extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  };

  componentDidMount(){
    const { candidates, monsters } = this.props;
    candidates(monsters);
  }

  render(){
    return (
      <div className='card-list'>  
        {this.props.monsters.map(monster => (
          <Card key={monster.id} monster={monster} />
        ))}
      </div>

    )
  }
};
// const CardList = ({ monsters, candidates }) => (
//   <div className='card-list'>
//     {candidates(monsters),
//     monsters.map(monster => (
//       <Card key={monster.id} monster={monster} />
//     ))}
//   </div>

// );



const mapDispatchToProps = dispatch => ({
  candidates: monsters => dispatch(candidates(monsters)),
  // candidate: monster => dispatch(candidate(monster))
});


export default connect(null, mapDispatchToProps)(CardList);
{/* <Route exact path='/signin' render={() => props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}/> */}