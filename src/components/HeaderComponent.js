import React, { Component } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import {
  Nav,
  NavbarBrand,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  Label,
  NavItem,
  TabContent,
  TabPane,
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classnames from "classnames";

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
    if (typeof window !== 'undefined') {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const maxScroll = document.body.clientHeight - window.innerHeight;
        let currentScrollPos = window.pageYOffset;
        if (
            (maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
          || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
          || (prevScrollpos <= 0 && currentScrollPos <= 0)
          ) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-5.0rem"; // adjustable based your need
        }
        prevScrollpos = currentScrollPos;
      }
    }
  }
  
  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  }

  handleRegister(event) {
    alert(
      `Username: ${this.username.value} Email: ${this.email.value} Password: ${this.password.value} `
    );
    this.toggleModal();
    this.toggleModalPetId();
    this.generateId();
    event.preventDefault();
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
    console.log(this.state.collapsed);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar id="navbar" light className="site-header "  expand="lg" >
          <NavbarBrand to="/home" className="mr-auto" style={{color:"white"}}>
            <h3>PetBook</h3>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="ml-5 ">
              <NavItem className="m-2 " >
                <Link className="headerLinks" to="/Feed">Feed</Link>
              </NavItem>
              <NavItem className="m-2 ">
                <Link className="headerLinks" to="/PetProfile">PetProfile</Link>
              </NavItem>
              <NavItem className="m-2 ">
                <Link className="headerLinks" to="/Shelters">Shelters</Link>
              </NavItem>
              <NavItem className="m-2 ">
                <Link className="headerLinks" to="/LostPets" >LostPets</Link>
              </NavItem>
            </Nav>
            <Form inline clasName="d-flex justify-content-center ">
              <Button variant="secondary" className="m-2">
                Search
              </Button>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 "
              />
            </Form>
          </Collapse>
          <span className="navbar-text">
            <Button size="sm" onClick={this.toggleModal}>
              <i className="fa fa-sign-in fa-lg" /> Login
            </Button>
          </span>
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
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="row">
                  <div className="col-sm-12">
                    <Form onSubmit={this.handleLogin}>
                      <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input
                          type="text"
                          id="username"
                          name="username"
                          innerRef={(input) => (this.username = input)}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          innerRef={(input) => (this.password = input)}
                        />
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="remember"
                            innerRef={(input) => (this.remember = input)}
                          />
                          Remember me
                        </Label>
                      </FormGroup>

                      <Button type="submit" value="submit" color="primary">
                        Login
                      </Button>
                    </Form>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <Form onSubmit={this.handleRegister}>
                  <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      innerRef={(input) => (this.username = input)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      innerRef={(input) => (this.email = input)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      innerRef={(input) => (this.password = input)}
                    />
                  </FormGroup>
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
          <ModalHeader toggle={this.toggleModalPetId}>
            Unique Pet Id
          </ModalHeader>
          <ModalBody>{this.props.uniqueId.uniqueId}</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
