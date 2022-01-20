import React from "react";
import Input from "./input";

class Login extends React.Component {
  state = {
    uname: "",
    upass: "",
    storeName: [],
    // storePass:[]
  };
  handleChangeName = (e) => {
    this.setState({
      uname: e.target.value,
    });
  };

  handleChangePassword = (e) => {
    this.setState({
      upass: e.target.value,
    });
  };

  signUp = () => {
    console.log(this.state.uname);
    let sname = this.state.uname;
    const pass = this.state.upass;
    let storage = this.state.storeName;

    if (storage.length === 0) {
      this.setState({
        storeName: [
          {
            name: sname,
            pass,
          },
        ],
      });
    } else {
      const find = this.state.storeName.findIndex((e) => {
        return e.name === sname;
      });

      if (find === -1) {
        this.setState({
          storeName: [
            ...this.state.storeName,
            {
              name: sname,
              pass,
            },
          ],
        });
      } else {
        console.log('alert')
      }
    }
  }

  signIn = () => {
    let check = this.state.storeName.filter((e)=>{
      if(e.name===this.state.uname){
        if(e.pass===this.state.upass){
          return true
        }
        else{
          console.log('password is wrong')
        }
        return false
      }

      return false
    })
  if(check.length===1){
    console.log('welcome')
  }
  else{
    console.log('sign up')
  }

  };

  render() {
    
    return (
      <div>
        Name:{" "}
        <Input value={this.state.uname  }name="uname" type="text" func={this.handleChangeName}></Input>
        Password:
        <Input
          name="upass"
          type="password"
          func={this.handleChangePassword}
        ></Input>
        <div>
          Wronf
        </div>
        <button onClick={this.signUp}>Sign Up</button>
        <button onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
}
export default Login;
