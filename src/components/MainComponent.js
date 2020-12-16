import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Header from "./HeaderComponent";





class Main extends Component {
    
    
  
    render() {
      
        return (
         <Header/>
        );
      };
    }


    export default withRouter((Main))