import React, { Component } from 'react'

export class Request extends Component {
    render() {
        return (
            <div>
                <lu>
                  <li>pickup:{this.props.request.pickup}</li>
                  <li>dropoff:{this.props.request.dropoff}</li>
                  <li>data:{this.props.request.date}</li>
                  <li>completed:{this.props.request.completed}</li>
                  <li>assistantId:{this.props.request.assistantId}</li>
                  <li>assistantId:{this.props.request.myrequests}</li>
            </lu>
            </div>
        )
    }
}

export default Request
