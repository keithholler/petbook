import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../redux/ActionCreators";
import classnames from "classnames";
import { Control, Form } from "react-redux-form";
import { Button, Label, Row, Col } from "reactstrap";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      authorized: false,
    };
  }
  componentDidMount() {
    //If logged in and user navigates to Login page, should redirect them to dashboard
    // if (this.props.auth.isAuthenticated) {
    //   //alert("Already Loged In")
    // }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
      console.log(this.state.errors);
    }

    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/PetProfile");
      this.props.toggleModal();
      // alert("Already Loged In")
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/PetProfile");
    //   this.props.toggleModal()
    //  // alert("Already Loged In")
    // }
    // if (this.props.auth.isAuthenticated) {
    //   this.props.history.push("/Feed");
    //   this.props.toggleModal()
    //   alert("Already Loged In")
    // }
    //e.preventDefault();

    //    if(this.state.email != ""){
    //       this.setState({

    //           errors: this.props.errors.email = null
    //         });
    //   }
    //  if(this.state.password != ""){
    //       this.setState({

    //           errors: this.props.errors.password = null,
    //         });
    //   }
    // if (this.props.auth.isAuthenticated === true){
    //   this.props.toggleModal()
    // }

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };
  render() {
    const { errors } = this.state;
    return (
      <Form
        model="profileForm"
        onSubmit={(values) => this.onSubmit(values)}
        className="mt-2"
      >
        <Row className="form-group ">
          <Col>
            <Label htmlFor="email" className="ml-3">
              Email:
            </Label>

            <Col md={10}>
              <Control.text
                model=".email"
                id="email"
                name="email"
                placeholder="email"
                onChange={this.onChange}
                value={this.state.email}
                className={classnames("form-control", {
                  invalid: errors.email,
                })}
              />
              <span className="text-danger m-1">{errors.email}</span>
            </Col>
          </Col>
        </Row>
        <Row className="form-group ">
          <Col>
            <Label htmlFor="password" className="ml-3">
              Password:
            </Label>

            <Col md={10}>
              <Control.text
                model=".password"
                id="password"
                name="password"
                placeholder="password"
                onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                className={classnames("form-control", {
                  invalid: errors.password || errors.passwordincorrect,
                })}
              />
              <span className="text-danger m-1">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </Col>
          </Col>
        </Row>
        <Button type="submit" value="submit" color="primary">
          Login
        </Button>
      </Form>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(withRouter(Login));
