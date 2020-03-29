import React from 'react';
import './form.style.scss';
import Collapsible from 'react-collapsible';
import 'firebase/firestore';
import InterviewCards from '../int-round-card/int-round-card.component';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
// import Card from '../card/card.component';

class Form extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            email: '',
            password: '',
            associationListCount : [{value:1}],
            associationCount : 1,
            
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',
                       password:''});
    };
    
    handleChange = event => {
        const { value, name } = event.target;        
        this.setState({ [name]: value });
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

    // componentDidMount() {
    //     const { monsters, currentUser } = this.props;
    // }
  
    render() {
        const { monsters } = this.props;
        const monster = monsters.filter(monster => {
            if(`/${monster.id}/${monster.name}`===this.props.match.url){
                return monster;
            }
        })
        console.log(monster[0]);
        // const { monsters } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} key={monster[0].id}>                
                    <div className="grid-container">                 
                    {/* <div className="grid-item"><div className="form-style-10"><div className="section"><span>1</span></div></div></div> */}
                    {/* <div className="grid-item">
                        <label> ID </label><br></br>
                        <input name='id' type='number' onChange={this.handleChange} value={this.state.email} required  />
                    </div>                     */}
                    <div className="form-style-3">
                        <div className="grid-item"><div className="form-style-10"><div className="section"><span>0</span></div></div></div>
                            <fieldset>
                                <legend>User Details</legend>
                                    <Collapsible trigger="User Name" triggerTagName="fieldset" >
                                        <div className='userinfo'>
                                            <label> Name </label>
                                            <input name='date' type='text' value={monster[0].name} readOnly/>
                                            <label> ID </label>
                                            <input name='date' type='text' value={monster[0].id} readOnly/>
                                            <label> email </label>
                                            <input name='date' type='text' value={monster[0].email} readOnly/>
                                        </div>
                                    </Collapsible>
                                
                                {/* <Collapsible trigger="User Name" triggerTagName="fieldset">
                                    <div className='userinfo'>
                                        <label> name </label>
                                        <input name='date' type='text' value='Girish i R' readOnly/> 
                                        <label> resume </label>
                                        <input name='date' type='text' value='https://www.jotform.me/uploads/sankarkrishna/72490348973467/3808526968862907492/Sowjanya Atyam.docx' readOnly/>
                                        <label> Email </label>
                                        <input name='date' type='text' value='123456789' readOnly/>
                                        <label> How_did_you_come_by_this_Job_Opportunity </label>
                                        <input name='date' type='text' value='How_did_you_come_by_this_Job_Opportunity' readOnly/>
                                        <label> Edit_Link </label>
                                        <input name='date' type='text' value='Edit_Link' readOnly/>
                                    </div>
                                </Collapsible>                          */}
                            </fieldset>
                    </div>

                        {
                            this.state.associationListCount.map((item)=>{
                            return <div className="form-style-3" key={item.value}>
                                <div className="grid-item"><div className="form-style-10"><div className="section"><span>{item.value}</span></div></div></div>
                                    <InterviewCards/>
                                {/* <input  className="input-field" onChange={this.handleChange} isMulti={true} placeholder={'Add comment'} />          */}
                                {/* <input className="input-field" onChange={this.handleChange} name={attributeName} isMulti={true} />  */}
                                </div>
                            })
                        }

                        <CustomButton className="submit" type="button" onClick={this.createAssociation} >Add New Round Card</CustomButton>
                        <CustomButton className="submit" type="button" onClick={this.deleteAssociation} >Delete Round Card</CustomButton>               

                    </div>                
                    <input className="submit" type='submit' value='Submit'/>
                </form>
            </div>
        );
    }
}



const mapStateToProps = ({ user: { currentUser }, candidates: { monsters }}) => ({
    monsters,
    currentUser
});

export default connect(mapStateToProps)(withRouter(Form));