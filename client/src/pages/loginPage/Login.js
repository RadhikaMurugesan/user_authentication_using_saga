import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserLog } from "../../actions/Action";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getUserLog();
  }


  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const arr = this.props.data;
    console.log(arr);
    let obj = arr.find(o => o.email === this.state.email);
    console.log(obj);    
    this.props.history.push('/welcome', {userObj:obj});
  }
  render() {
    const { email, password } = this.state;
    console.log('did', this.props.data)
    return (
      <div>
        <h2>Login Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <br />
          <button>LogIn</button>
        </form>
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
