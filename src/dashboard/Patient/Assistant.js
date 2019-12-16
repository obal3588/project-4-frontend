import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route, Redirect } from 'react-router-dom'
export class Assistant extends Component {
 constructor(){
     super();
     this.state = {
        redirect: false
      }
 }
 setRedirect = event => {
    event.preventDefault();
    this.setState({
      redirect: true
    })

  }
  renderRedirect = () => {
    if (this.state.redirect) {
        this.setState({
            redirect: false
          })
        this.props.setAssistantId(this.props.assistant._id)
      return <Redirect to={`/${this.props.user.role}/${this.props.user.token }/newrequest`} />
    }
  }

    render() {
  
        return (
            <div>
          
                {this.renderRedirect() }
                     <h2>{this.props.assistant.name }</h2> 
                    <h2>{this.props.assistant.age }</h2> 
                     <h2>{this.props.assistant.phone }</h2> 
                    <h2>{this.props.assistant._id }</h2>
                     <button onClick={this.setRedirect}>Redirect</button>
    

            </div>
        )
    }
}

export default Assistant
