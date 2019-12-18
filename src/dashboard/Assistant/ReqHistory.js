import React, { Component } from "react";
import { myrequestsAssistants } from "../../auth/api";
import ReqHis from "./ReqHis"
import { ThemeContext } from "../../ThemeContext/ThemeContext";

export class ReqHistory extends Component {
  constructor() {
    super();

    this.state = {
      obaid:[]
    };
  }
  static contextType = ThemeContext;
  // apiCallReq = () => {
  //   myrequestsAssistants(this.props.user)
  //     .then(res => {
  //       console.log(res.data, "data");
  //       const temp = res.data.requests.map(patient => {
  //         return {
  //           assistantId: patient.assistantId,
  //           patientId: patient.patient,
  //           completed: patient.completed,
  //           requestStatus: patient.requestStatus,
  //           date: patient.date,
  //           pickup: patient.trip.start,
  //           dropoff: patient.trip.destination,
  //           carDescription: patient.carDescription,    
  //           specialNeeds: patient.specialNeeds,
  //           package: patient.package,
  //           token: this.props.user.token,
  //           _id: patient._id,
  //           patient: ""
  //         };
  //       });
  //       this.setState({ req: temp });
  //     })

  //     .catch(e => console.log(e, "errer"));
  // };

  componentDidMount() {
    const temp = this.context.patientReqGlobule
    this.setState({ obaid: temp });
    // this.apiCallReq();
  }

  
  render() {
    const arr = this.state.obaid.map(x => {
      return <ReqHis req={x} />;
    });
    return(
     <div>

{arr}

    </div>);
  }
}

export default ReqHistory;
