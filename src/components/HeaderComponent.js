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
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      collapsed: true,
      isNavOpen: false,
      isModalOpen: false,
      isPetIdModalOpen: false,
      activeTab: "1",
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.generateId = this.generateId.bind(this);
    this.toggleModalPetId = this.toggleModalPetId.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleLogin(values) {
    // alert(
    //   `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    // );

    if (values.email) {
      alert("Logged In");
    } else {
      alert("Please Register First");
    }
    this.toggleModal();
  }

  handleRegister(values) {
    // alert(
    //   `Username: ${this.username.value} Email: ${this.email.value} Password: ${this.password.value} `
    // );
    this.props.addUserInfo(
      this.props.uniqueId.uniqueId,
      "localImageUrl",
      values,
      true
    );
    this.toggleModal();
    this.toggleModalPetId();
    this.generateId();
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  generateId() {
    this.props.addUniqueId(uuid());
    // this.setState({
    //   uniqueId: uuid(),
    // });
  }
  toggleModalPetId() {
    this.setState(
      {
        isPetIdModalOpen: true,
      },
      () => {
        setTimeout(this.handleClose, 3000);
      }
    );
  }

  handleClose = () => {
    this.setState({
      isPetIdModalOpen: false,
    });
  };

  toggleNav() {
    this.setState({
      //  isNavOpen: !this.state.isNavOpen,
      collapsed: !this.state.collapsed,
    });
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

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
          <NavbarBrand
            to="/home"
            className="mr-auto"
            style={{ color: "white" }}
          >
            <h3>PetBook</h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="mx-auto">
              {/* <NavItem className="m-2 ">
                <NavLink
                  tag={RRNavLink}
                  className="headerLinks"
                  activeClassName="active"
                  to="/Shelters"
                  onClick={!this.state.collapsed ? this.toggleNav : ""}
                >
                  <h5>Shelters</h5>
                </NavLink>
              </NavItem> */}
              <NavItem className="m-2 ">
                <NavLink
                  tag={RRNavLink}
                  style={{
                    fontWeight: "bold",
                    color: "white",
                  }}
                  to="/LostPets"
                  onClick={!this.state.collapsed ? this.toggleNav : ""}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "white",
                    textDecoration: "underline",
                  }}
                >
                  <h5>LostPets</h5>
                </NavLink>
              </NavItem>
              <NavItem className="m-2 ">
                {this.props.userInfo.userInfo.profileInfo ? (
                  <NavLink
                    tag={RRNavLink}
                    onClick={!this.state.collapsed ? this.toggleNav : ""}
                    to="/Feed"
                    style={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                    activeStyle={{
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "underline",
                    }}
                  >
                    <h5>Feed</h5>
                  </NavLink>
                ) : (
                  <NavLink
                    tag={RRNavLink}
                    // className="headerLinks"
                    onClick={!this.state.collapsed ? this.toggleNav : ""}
                    to="/LostPets"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    <h5>Feed</h5>
                  </NavLink>
                )}
              </NavItem>
            </Nav>
          </Collapse>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav caret style={{ color: "white" }}>
              <img
                id="proPic"
                className="profileImg rounded-circle ml-3"
                src="petbook/assets/default.png"
                alt=""
                style={{ width: "40px" }}
              />
            </DropdownToggle>
            {this.state.collapsed ? (
              <DropdownMenu right>.
                <NavItem className="">
                  {this.props.userInfo.userInfo.profileInfo ? (
                    <Link style={{ color: "black" }} to="/PetProfile">
                      <DropdownItem id="profileSettings">
                        <img
                          id="music"
                          className="profileImg rounded-circle"
                          src="petbook/assets/default.png"
                          alt=""
                          style={{ width: "40px" }}
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
                  ) : (
                    <Link style={{ color: "black" }} to="/">
                      <DropdownItem id="profileSettings">
                        <img
                          id="music"
                          className="profileImg rounded-circle"
                          src="petbook/assets/default.png"
                          alt=""
                          style={{ width: "40px" }}
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
            ) : (
              <DropdownMenu>
                <NavItem className="">
                  {this.props.userInfo.userInfo.profileInfo ? (
                    <Link style={{ color: "black" }} to="/PetProfile">
                      <DropdownItem id="profileSettings">
                        <img
                          id="music"
                          className="profileImg rounded-circle"
                          src="petbook/assets/default.png"
                          alt=""
                          style={{ width: "40px" }}
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
                  ) : (
                    <Link style={{ color: "black" }} to="/">
                      <DropdownItem id="profileSettings">
                        <img
                          id="music"
                          className="profileImg rounded-circle"
                          src="petbook/assets/default.png"
                          alt=""
                          style={{ width: "40px" }}
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
            )}
          </UncontrolledDropdown>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
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
        <Modal
          isOpen={this.state.isPetIdModalOpen}
          toggle={this.toggleModalPetId}
        >
          <ModalHeader toggle={this.toggleModalPetId}>Owner Id</ModalHeader>
          <ModalBody>{this.props.uniqueId.uniqueId}</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
