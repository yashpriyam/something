import React from 'react';
import 'firebase/firestore';    //for database
import { postComment } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux';


class Comment extends React.Component {
    constructor( { currentUser } ) {
        super();
        console.log(currentUser)
        this.state = {
            comment: '',
            currentUser
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log(event);
        
        const userWords = this.state;
        //console.log(userWords);
      
        try {
            postComment(userWords);
            // console.log(userWords.comment);
            this.setState({
                comment: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        // console.log(event.target);
        // console.log(event.target.value);     
        this.setState({ [name]: value });
    };

    render() {
        const { comment } = this.state;
        return (
            <div>
                <FormInput
                    type='text'
                    name='comment'
                    value={ comment }
                    onChange={this.handleChange}
                    label='Add comment'
                />
                <button type="submit" onClick={this.handleSubmit}>Save</button>
            </div>
            
            // {/* <input className="input-field" onChange={this.handleChange} name={attributeName} isMulti={true} />  */}

        )
    }
    
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Comment);
