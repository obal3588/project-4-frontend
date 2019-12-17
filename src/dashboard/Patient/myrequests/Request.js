import React, { Component } from 'react'
import {deleteRequest} from "../../../auth/api"
import {Redirect} from "react-router-dom"
import { ThemeContext }  from "../../../ThemeContext/ThemeContext"

export class Request extends Component {


    constructor(){
        super();
        this.state = {
            redirect: false
          };
    }
    static contextType = ThemeContext;
    setRedirect = event => {
        event.preventDefault();
        this.setState({
          redirect: true
        });
      };

      renderRedirect = () => {
        if (this.state.redirect) {
          this.setState({
            redirect: false
          });
        
          const { req} = this.context;
          req(this.props.request);
          return (

            <Redirect to={{
                pathname: `/Patient/:${this.props.request.token}/myrequests/update/${this.props.request._id}`,
                state: { id: this.props.request._id}
            }}
    />
        
          );
        }
      };
    handlDelete=e=>{

      e.preventDefault()
        
        deleteRequest(this.props.request)
        this.props.apicall()

        
    }
      handlDelete=e=>{

      e.preventDefault()
        
        deleteRequest(this.props.request)
        this.props.apicall()

        
    }
 
    render() {
        console.log(this.context,"aaaa")
        return (
            <div>
                  {this.renderRedirect()}
                <lu>
                  <li>pickup:{this.props.request.pickup}</li>
                  <li>dropoff:{this.props.request.dropoff}</li>
                  <li>data:{this.props.request.date}</li>
                  <li>completed:{this.props.request.completed}</li>
                  <li>assistantId:{this.props.request.assistantId}</li>
                  
            </lu>
            <button onClick={this.handlDelete}>Delete</button>
            <button onClick={this.setRedirect}>edit</button>

            </div>
        )
    }
}

export default Request
