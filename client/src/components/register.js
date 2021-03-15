import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../redux/ActionCreators";
import classnames from "classnames";
import { Control, Form } from "react-redux-form";
import uuid from "react-uuid";
import {
    Button,
    Label,
    Row,
    Col,
  } from "reactstrap";
class Register extends Component {
  constructor() {
    super();
    this.state = {
        name : "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  generateId = () => {
    this.props.addUniqueId(uuid());
  };
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/LostPets");
      this.props.toggleModal()
      alert("Already Loged In")
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = (e) => {
    //e.preventDefault();
     if( this.state.name !== ""){
        this.setState({
            errors: this.props.errors.name = null,
          });
    }
     if(this.state.email != ""){
        this.setState({

            errors: this.props.errors.email = null,
          });
    }
   if(this.state.password != ""){
        this.setState({

            errors: this.props.errors.password = null,
          });
    }
   if(this.state.password2 != ""){
        this.setState({
            errors: this.props.errors.password2 = null,
          });
    } 
if (this.props.errors.name === null && this.props.errors.email === null &&this.props.errors.password === null && this.props.errors.password2 === null){
    this.props.toggleModal()
}
    this.props.addUserInfo(
  {profileName:this.state.name}
      )

const newUser = {
    name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
this.props.registerUser(newUser, this.props.history); 
  };
render() {
    const { errors } = this.state;
return (
    //   <div className="container">
    //     <div className="row">
    //       <div className="col s8 offset-s2">
    //         <Link to="/" className="btn-flat waves-effect">
    //           <i className="material-icons left">keyboard_backspace</i> Back to
    //           home
    //         </Link>
    //         <div className="col s12" style={{ paddingLeft: "11.250px" }}>
    //           <h4>
    //             <b>Register</b> below
    //           </h4>
    //           <p className="grey-text text-darken-1">
    //             Already have an account? <Link to="/login">Log in</Link>
    //           </p>
    //         </div>
    //         <form noValidate onSubmit={this.onSubmit}>
    //           <div className="input-field col s12">
    //             <input
    //               onChange={this.onChange}
    //               value={this.state.name}
    //               error={errors.name}
    //               id="name"
    //               type="text"
    //               className={classnames("", {
    //                 invalid: errors.name
    //               })}
    //             />
    //             <label htmlFor="name">Name</label>
    //             <span className="red-text">{errors.name}</span>
    //           </div>
    //           <div className="input-field col s12">
    //             <input
    //               onChange={this.onChange}
    //               value={this.state.email}
    //               error={errors.email}
    //               id="email"
    //               type="email"
    //               className={classnames("", {
    //                 invalid: errors.email
    //               })}
    //             />
    //             <label htmlFor="email">Email</label>
    //             <span className="red-text">{errors.email}</span>
    //           </div>
    //           <div className="input-field col s12">
    //             <input
    //               onChange={this.onChange}
    //               value={this.state.password}
    //               error={errors.password}
    //               id="password"
    //               type="password"
    //               className={classnames("", {
    //                 invalid: errors.password
    //               })}
    //             />
    //             <label htmlFor="password">Password</label>
    //             <span className="red-text">{errors.password}</span>
    //           </div>
    //           <div className="input-field col s12">
    //             <input
    //               onChange={this.onChange}
    //               value={this.state.password2}
    //               error={errors.password2}
    //               id="password2"
    //               type="password"
    //               className={classnames("", {
    //                 invalid: errors.password2
    //               })}
    //             />
    //             <label htmlFor="password2">Confirm Password</label>
    //             <span className="red-text">{errors.password2}</span>
    //           </div>
    //           <div className="col s12" style={{ paddingLeft: "11.250px" }}>
    //             <button
    //               style={{
    //                 width: "150px",
    //                 borderRadius: "3px",
    //                 letterSpacing: "1.5px",
    //                 marginTop: "1rem"
    //               }}
    //               type="submit"
    //               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //             >
    //               Sign up
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>

  <Form
    model="profileForm"
    onSubmit={(values) => this.onSubmit(values)}
    className="mt-2"
  >
    <Row className="form-group ">
      <Col>
        <Label htmlFor="name" className="ml-3">
          Profile Name:
        </Label>
        <Col md={10}>
          <Control.text
            model=".name"
            id="name"
            name="name"
            placeholder="name"
            onChange={this.onChange}
            value={this.state.name}
            className={classnames("form-control", {
                invalid: errors.name
               })}
          />
          <span className="text-danger m-1">{errors.name}</span>
        </Col>
      </Col>
    </Row>
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
                invalid: errors.email
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
                invalid: errors.password
               })}
          />
          <span className="text-danger m-1">{errors.password}</span>
        </Col>
      </Col>
    </Row>
    <Row className="form-group ">
      <Col>
        <Label htmlFor="password2" className="ml-3">
          Comfirm Password:
        </Label>

        <Col md={10}>
          <Control.text
            model=".password"
            id="password2"
            name="password2"
            placeholder="password2"

            onChange={this.onChange}
            value={this.state.password2}
            error={errors.password2}
            className={classnames("form-control", {
            invalid: errors.password2
           })}
          />
          <span className="text-danger m-1">{errors.password2}</span>
        </Col>
      </Col>
    </Row>

    <Button type="submit" value="submit" color="primary">
      Register
    </Button>
  </Form>

    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));