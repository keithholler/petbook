import React, { Component } from "react";
import { Button, FormControl, Form } from "react-bootstrap";
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
  NavLink,
  TabContent,
  TabPane,
  Collapse,
  Navbar,
  NavbarToggler,
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
      uniqueId: "",
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
    this.generateId = this.generateId.bind(this);
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
    this.setState({
      uniqueId: uuid(),
    });
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
        <Navbar light className="site-header" sticky="top" expand="lg">
          <NavbarBrand href="/home" className="mr-auto">
            PetBook
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/Feed">Feed</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/PetProfile">PetProfile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Shelters">Shelters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/LostPets">LostPets</NavLink>
              </NavItem>
            </Nav>
            <Form inline>
              <Button variant="outline-secondary" className="mr-2">
                Search
              </Button>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2 "
              />
            </Form>
          </Collapse>
          <span className="navbar-text ml-auto">
            <Button outline size="sm" onClick={this.toggleModal}>
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
          <ModalBody>{this.state.uniqueId}</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
