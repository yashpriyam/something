import React from 'react';
import Skype from '../skype/skype.component';
import InPerson from '../in_person/in_person.component';
import Telephonic from '../telephonic/telephonic.component';
import Comment from '../comment/comment.component';

class InterviewCards extends React.Component {
    constructor() {
        super();
        this.state={
            associationListCount : [{value:1}],
            associationCount : 1,
            skype: false,
            in_person: false,
            by_pass: false
        }
    }

    skype = () => {
        this.setState({
            skype: true,
            in_person: false,
            by_pass: false
        })
    };

    in_person = () => {
        this.setState({
            skype: false,
            in_person: true,
            by_pass: false
        })
    };

    by_pass = () => {
        this.setState({
            skype: false,
            in_person: false,
            by_pass: true
        })
    };

    createAssociation = () =>{
        let association = this.state.associationListCount;
        let count = this.state.associationCount + 1;
        association.push({value:count})
       this.setState({
            associationListCount : association,
            associationCount : count
       })
       console.log(this.state.associationListCount);
    };
    deleteAssociation = () =>{
        let association = this.state.associationListCount;
        let count = this.state.associationCount - 1;
        association.pop({value:count})
       this.setState({
            associationListCount : association,
            associationCount : count
       })
    };


    render() {
        return (
            <fieldset>
                <legend> Interview Process</legend>                        
                {/* <div className="form-style-10">
                    <div className="section">
                        <span> Face-To-Face Interview </span>
                    </div>
                </div>                         */}
                {
                    this.state.skype ? (<Skype />) : (<div></div>)
                }
                {
                    this.state.in_person ? (<InPerson />) : (<div></div>)
                }
                {
                    this.state.by_pass ? (<Telephonic />) : (<div></div>)
                }
                
                <button className="submit" type="button" onClick={this.skype} >Skype</button>
                <button className="submit" type="button" onClick={this.in_person} >Face to Face</button>
                <button className="submit" type="button" onClick={this.by_pass} >Telephonic</button>

                {
                    this.state.associationListCount.map((item)=>{
                    return <div className="form-style-3" key={item.value}>
                        <Comment/>
                        {/* <input  className="input-field" onChange={this.handleChange} placeholder={'Add comment'} />         
                        <input className="input-field" onChange={this.handleChange} name={attributeName} isMulti={true} />  */}
                        </div>
                    })
                }

                <button className="submit" type="button" onClick={this.createAssociation} >Add Comment</button>
                <button className="submit" type="button" onClick={this.deleteAssociation} >Delete</button>
            </fieldset>

        )
    }




}

export default InterviewCards;