import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    constructor(){
        super();
        this.state = {
            reqid: "",
            patientReqGlobule:[],

         
          }
    }

  req= e=> {

      
    this.setState({ reqid:e });
  }

  patientReqSet= e=> {

      
    this.setState({ patientReqGlobule:e });
  }
  render() { 
      console.log(this.state.reqid,"help")
    return (
      <ThemeContext.Provider value={{...this.state, req: this.req , patientReqSet:this.patientReqSet}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;