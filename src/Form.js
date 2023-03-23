import React from "react";


export class Form extends React.Component{
        
     state= {
         username:"",
        password:"",


     }

   UsernameHandler = (event) => {
    const value = event.target.value

    this.setState({
     username : value
    })
   }
   PasswordHandler = (event) => {
    const value = event.target.value

    this.setState({
    password : value
    })
 }
 ResetHandler = () => {

    this.setState({
    username:"",
    password:"",
    })
 }

    render(){
       
    return(
        <>
        <form>
            <input name="username"  type="text"  value={this.state.username} onChange={this.UsernameHandler} />
            <input name="password" type="password" value={this.state.password} onChange={this.PasswordHandler}  />
            <button type="submit"  >Login</button>
            <button type="button" onClick={this.ResetHandler }>Reset</button>
            </form>
        </>
    )

}
}