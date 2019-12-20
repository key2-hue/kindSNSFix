import React from "react"
import PropTypes from "prop-types"



class Top extends React.Component{
   constructor() {
     super();
     this.state = {
       count: 0
     }
   }

   countUp() {
     this.setState(
      {
        count: this.state.count + 1
      })
   }

    render() {
      return (
        <div className="goodPoint">
          <i className="fab fa-twitter"></i>
          <button className="countUp" onClick={() => {this.countUp()}}>{this.state.count}</button>
        </div>
      )
    }
  }


 
 



export default Top
