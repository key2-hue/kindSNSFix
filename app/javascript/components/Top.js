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

   countDown() {
     this.setState({
       count: this.state.count - 1
     });
   }

   componentDidUpdate() {
     localStorage.setItem('count', JSON.stringify(this.state.count))
   }

   componentDidMount() {
     this.setState({
       count: JSON.parse(Number(localStorage.getItem('count')))
     })
   }

    render() {
      let count = {
        width: "150px",
        height: "30px",
        lineHeight: "15px",
        fontSize: "12px"
      }
      return (
        <div className="goodPoint">    
          <button type="button" className="btn btn-primary countUp" style={count}
           onClick={() => {this.countUp() }} id={this.props.id}>いいね！</button> 
           <p class="messageCount">{this.state.count}</p>
           <button type="button" className="btn btn-danger countDown" style={count}
           onClick={() => {this.countDown() }} id={this.props.id}>うーん...</button>
        </div>
      )
    }
  }


 
 



export default Top
