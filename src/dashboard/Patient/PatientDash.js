import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { allAvailableAssistant } from "../../auth/api";
import Assistant from "./Assistant"
import { Route, Redirect } from 'react-router';
export class PatientDash extends Component {

    constructor(){
        super()

        this.state = {
            assistant:[],
          };


    }
    componentDidMount(){
       
        allAvailableAssistant(this.props.user).then(res=>{
            console.log(res.data,"data")
            const temp = res.data.requests.map((assistant)=>{
                return { 
                    name:assistant.name ,
                    age:assistant.age,
                    phone:assistant.phone,
                    _id:assistant._id
                }
            })
            this.setState({assistant:temp})
        })
      

    }
    render() {
        const Assistants= this.state.assistant.map((val)=>{
            return (
                
        <Assistant assistant={val} user={this.props.user} setAssistantId={this.props.setAssistantId}/> )})
     
       
        // const newTo = { 
        //     pathname: `/${this.props.user.role}/${this.props.user.token }/newrequest`, 
        //     token: this.props.user.token 
        //   };
        return (

            <dev>

                {Assistants}
            </dev>
        )
    }
}

export default PatientDash
