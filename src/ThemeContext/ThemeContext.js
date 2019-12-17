import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    constructor(){
        super();
        this.state = {
            reqid: "",
         
          }
    }

  req= e=> {

      
    this.setState({ reqid:e });
  }
  render() { 
      console.log(this.state.reqid,"help")
    return (
      <ThemeContext.Provider value={{...this.state, req: this.req}}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;