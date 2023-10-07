import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
export class Signupsuccess extends Component {
    constructor(props) {
      super(props)
      this.state = {
         islogged:true
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({islogged:false})
        },2000)
    }
  render() {
    if(this.state.islogged){
      const myStyle = {
        marginTop: "250px",
        marginLeft: "500px",
        fontSize: "30px"
      }
    return (
      <div>
        <h1 style={myStyle}>Account created Successfully !</h1>
        <h3 style={{fontSize: "25px"}}>Login......</h3>
      </div>
    )}
    return <Navigate to="/login"/>
  }
}

export default Signupsuccess