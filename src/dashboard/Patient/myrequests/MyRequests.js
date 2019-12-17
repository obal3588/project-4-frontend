import React, { Component } from 'react'
import {myrequests} from "../../../auth/api"
import Request from "./Request"
export class MyRequests extends Component {
constructor(){
    super();
    this.state = {
        myrequests:[],
      };
}    

componentDidMount(){

    myrequests(this.props.user).then(res=>{
        console.log(res.data,"data")
        const temp = res.data.requests.map((myrequests)=>{
            return { 
                pickup:myrequests.trip.start ,
                dropoff:myrequests.trip.destination,
                completed:myrequests.completed,
                requestStatus:myrequests.requestStatus,
                date:myrequests.date,
                assistantId:myrequests.assistantId,
                _id:myrequests._id
            }
        })
        this.setState({myrequests:temp})
    })
  
}
    
    render() {
        const myrequests= this.state.myrequests.map((val)=>{
            return (
                
        <Request request={val}  /> )})
     

        return (
            <div>
                {myrequests}
            </div>
        )
    }
}

export default MyRequests
