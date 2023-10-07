import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export class Loginsuccess extends Component {
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
        marginLeft: "650px",
        fontSize: "30px"
      }
    return (
      <div>
        <h1 style={myStyle}>Login Successful !</h1>
        <h3 style={{fontSize: "25px"}}>Redirecting to Profile page.......</h3>
      </div>
    )}
    return <Navigate to="/Profile"/>
  }
}

export default Loginsuccess