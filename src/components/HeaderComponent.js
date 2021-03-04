import React, { Component } from "react";
import { Link, NavLink as RRNavLink } from "react-router-dom";
import uuid from "react-uuid";
import {
  Nav,
  NavbarBrand,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  NavItem,
  TabContent,
  TabPane,
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  UncontrolledTooltip,
  Row,
  Col,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";
import { Control, Form, Errors } from "react-redux-form";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isNavOpen: false,
      isModalOpen: false,
      isPetIdModalOpen: false,
      activeTab: "1",
    };
  }

  handleLogin = (values) => {
    if (values.email) {
      alert("Logged In");
    } else {
      alert("Please Register First");
    }
    this.toggleModal();
  };

  handleRegister = (values) => {
    this.props.addUserInfo(
      this.props.uniqueId.uniqueId,
      "localImageUrl",
      values,
      true
    );
    this.toggleModal();
    this.toggleModalPetId();
    this.generateId();
  };
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  generateId = () => {
    this.props.addUniqueId(uuid());
  };
  toggleModalPetId = () => {
    this.setState(
      {
        isPetIdModalOpen: true,
      },
      () => {
        setTimeout(this.handleClose, 3000);
      }
    );
  };

  handleClose = () => {
    this.setState({
      isPetIdModalOpen: false,
    });
  };

  toggleNav = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          id="navbar"
          className="site-header "
          expand="lg"
          style={{ boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)" }}
          light
        >
          <NavbarBrand tag={RRNavLink} to="/petbook" className="ml-4" style={{ color: "white" }}>
            <h5
              style={{
                fontSize: "40px",
                textShadow: "1px 1px 3px #363636",
                fontFamily: "Fredoka One",
                fontWeight: "200",
              }}
            >
              PetB
              <img
                src="/petbook/assets/pawprint2.png"
                style={{ width: "40px", margin: "3px" }}
              ></img>
              k
            </h5>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="mx-auto">
              <NavItem className="mr-5 ml-4">
                <NavLink
                  tag={RRNavLink}
                 
                  style={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                  to="/LostPets"
                  onClick={!this.state.collapsed ? this.toggleNav : ""}
                  activeStyle={{
                    fontWeight: "900",
                    color: "white",
                    textDecoration: "underline",
                    
                  }}
                >
                  <img
                    src="/petbook/assets/lostFound.png"
                    alt="lostPets"
                    style={{
                      width: "30px",
                      height: "30px",
                      position: "relative",
                      margin: "3px",
                      display: "inline-block" 
                    }}
                    className="align-bottom"
                  />

                  <span
                    style={{ display: "inline" }}
                    className="text-nowrap align-bottom"
                  >
                    Lost & Found
                  </span>
                </NavLink>
              </NavItem>
              <NavItem className="mr-5 ml-4">
                <NavLink
                  tag={RRNavLink}
                  onClick={!this.state.collapsed ? this.toggleNav : ""}
                  to="/Feed"
                  style={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                  activeStyle={{
                    fontWeight: "900",
                    color: "white",
                    textDecoration: "underline",
                  }}
                
                >
                  <img
                    src="/petbook/assets/home4.png"
                    alt="feed"
                    style={{
                      width: "30px",
                      height: "30px",
                      position: "relative",
                      margin: "3px",
                      display: "inline-block" 
                    }}
                    className="align-bottom"
                  />
                  <span
                    style={{ display: "inline" }}
                    className="text-nowrap align-bottom"
                  >
                    Home
                  </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav caret style={{ color: "white" }}>
              Profile
              {typeof this.props.userInfo.userInfo.profileInfo ===
                "undefined" ||
              this.props.userInfo.userInfo.userPick === "localImageUrl" ||
              this.props.userInfo.userInfo.userPick === "" ? (
                <img
                  id="proPic"
                  className="profileImg rounded-circle ml-3"
                  src="/petbook/assets/default.png"
                  alt="profileImg"
                  style={{ width: "40px" }}
                />
              ) : (
                <img
                  id="proPic"
                  className="profileImg rounded-circle ml-3"
                  src={this.props.userInfo.userInfo.userPick}
                  alt="profileImg"
                  style={{ width: "40px" }}
                />
              )}
            </DropdownToggle>
              <DropdownMenu className="dropdownPosition">
                <NavItem className="">
                  {this.props.userInfo.userInfo.profileInfo ? (
                    <Link style={{ color: "black" }} to="/PetProfile">
                      <DropdownItem id="profileSettings">
                        {typeof this.props.userInfo.userInfo.profileInfo ===
                          "undefined" ||
                        this.props.userInfo.userInfo.userPick ===
                          "localImageUrl" ||
                        this.props.userInfo.userInfo.userPick === "" ? (
                          <img
                            id="proPic"
                            className="profileImg rounded-circle mr-1"
                            src="/petbook/assets/default.png"
                            alt="profileImg"
                            style={{
                              width: "40px",
                              objectFit: "cover",
                              objectPosition: "50% 50%",
                             
                            }}
                          />
                        ) : (
                          <img
                            id="proPic"
                            className="profileImg rounded-circle mr-2"
                            src={this.props.userInfo.userInfo.userPick}
                            alt="profileImg"
                            style={{
                              width: "40px",
                              objectFit: "cover",
                              objectPosition: "50% 50%",
                            }}
                          />
                        )}
                        Your Profile
                      </DropdownItem>
                      <UncontrolledTooltip
                        placement="left"
                        target="profileSettings"
                      >
                        Profile and Settings
                      </UncontrolledTooltip>
                    </Link>
                  ) : (
                    <Link style={{ color: "black" }} to="/">
                      <DropdownItem id="profileSettings" className="text-center m-0">
                        <img
                          className="profileImg rounded-circle mr-1"
                          src="/petbook/assets/default.png"
                          alt="profileImg"
                          style={{
                            width: "40px",
                            objectFit: "cover",
                            objectPosition: "50% 50%",
                          }}
                        />
                        Your Profile
                      </DropdownItem>
                      <UncontrolledTooltip
                        placement="left"
                        target="profileSettings"
                      >
                        Profile and Settings
                      </UncontrolledTooltip>
                    </Link>
                  )}
                </NavItem>
                <DropdownItem divider />
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Help</DropdownItem>
                <DropdownItem>
                  <span className="navbar-text ml-2">
                    <Button color="primary" onClick={this.toggleModal}>
                      <i className="fa fa-sign-in fa-lg" /> Login
                    </Button>
                  </span>
                </DropdownItem>
              </DropdownMenu>
          </UncontrolledDropdown>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader
            toggle={this.toggleModal}
            style={{
              backgroundColor: "#1b8eb1",
              color: "white",
              textShadow: "1px 1px 3px #363636",
              fontFamily: "Nunit, sans-serif",
              fontWeight: "bold",
            }}
          >
            Login
          </ModalHeader>
          <ModalBody>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1",
                  })}
                  onClick={() => {
                    this.toggleTab("1");
                  }}
                  href="#"
                >
                  Log In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2",
                  })}
                  onClick={() => {
                    this.toggleTab("2");
                  }}
                  href="#"
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Form
                  model="profileForm"
                  onSubmit={(values) => this.handleLogin(values)}
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
                          className="form-control"
                        />
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
                          className="form-control"
                        />
                      </Col>
                    </Col>
                  </Row>

                  <Button type="submit" value="submit" color="primary">
                    Login
                  </Button>
                </Form>
              </TabPane>
              <TabPane tabId="2">
                <Form
                  model="profileForm"
                  onSubmit={(values) => this.handleRegister(values)}
                  className="mt-2"
                >
                  <Row className="form-group ">
                    <Col>
                      <Label htmlFor="profileName" className="ml-3">
                        Profile Name:
                      </Label>

                      <Col md={10}>
                        <Control.text
                          model=".profileName"
                          id="profileName"
                          name="profileName"
                          placeholder="profileName"
                          className="form-control"
                        />
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
                          className="form-control"
                        />
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
                          className="form-control"
                        />
                      </Col>
                    </Col>
                  </Row>
                  <Button type="submit" value="submit" color="primary">
                    Register
                  </Button>
                </Form>
              </TabPane>
            </TabContent>
          </ModalBody>
        </Modal>
        {/* <Modal
          isOpen={this.state.isPetIdModalOpen}
          toggle={this.toggleModalPetId}
        >
          <ModalHeader
            toggle={this.toggleModalPetId}
            style={{
              backgroundColor: "#1b8eb1",
              color: "white",
              textShadow: "1px 1px 3px #363636",
            }}
          >
            Owner Id
          </ModalHeader>
          <ModalBody>{this.props.uniqueId.uniqueId}</ModalBody>
        </Modal> */}
      </React.Fragment>
    );
  }
}

export default Header;
