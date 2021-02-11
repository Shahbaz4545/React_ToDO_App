import React, { Component } from 'react';
import {BrowserRouter as Router,Route,} from "react-router-dom";
import Home from '../containers/home';
import About from '../containers/about'

class AppRouter extends Component{
    render(){
        return(
            <Router>
                {/* Route Always Take two props */}
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
            </Router>
        )
    }
}
export default AppRouter;




