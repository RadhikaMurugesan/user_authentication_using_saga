import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserLog } from "../../actions/UserActions";
import "./style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
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
    let obj = arr.find(o => o.email === this.state.email);
    this.props.history.push("/welcome", { userObj: obj });
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className="container">
        <div className="header">
          <p>User Authentication</p>
        </div>
        <div className="formContainer">
          <h2>Login Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div class="row">
              <div class="col-40">
                <label>Email:</label>
              </div>
              <div class="col-60">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div class="row">
              <div class="col-40">
                <label>Password:</label>
              </div>
              <div class="col-60">
                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div class="row">
              <button>LogIn</button>
            </div>
          </form>
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
