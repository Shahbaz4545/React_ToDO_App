import React,{Component} from 'react'
import { Link } from "react-router-dom";

class About extends Component{
  gotoHome=()=>{
    this.props.history.push('/')
  }
    render(){
        return(
            <div>
              <h1>About Page</h1>
              {/* <Link to="/">Go to Home</Link> */}
                <button onClick={this.gotoHome}>Go to Home</button>
            </div>
        )
    }
}

export default About;
