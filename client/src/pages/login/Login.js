import React, { Component } from "react";
import { connect } from "react-redux";
import Cookies from 'js-cookie';
import { getUserLog } from "../../actions/UserActions";
import Header from "../../components/header";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMsg: false
    };
  }

  

  componentDidMount() {
    this.props.getUserLog();
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const arr = this.props.data;
    let obj = arr.find(o => o.email === this.state.email && o.password == this.state.password);
    console.log('objjj', obj)
    if(obj){
      Cookies.set('userObj', obj);
      this.props.history.push("/welcome", { userObj: obj });
    }    
    else {
      this.setState ({
        errorMsg: true
      });
    }
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className="container">
       <Header headerName = "User Authentication"/>
        <div className="formContainer">
         <div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-40">
                <label>Email</label>
              </div>
              <div className="col-60">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required={true}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-40">
                <label>Password</label>
              </div>
              <div className="col-60">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required={true}
                />
              </div>
            </div>
            {
              this.state.errorMsg ? <p className="error">Incorrect email or password </p>:null
            }
            <div className="">
              <button>LogIn</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = {
  getUserLog: getUserLog
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
