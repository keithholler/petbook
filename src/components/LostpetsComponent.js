import React, { Component } from "react";
import { Control, Form, Errors } from "react-redux-form";
import {
  Button,
  Label,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import uuid from "react-uuid";
import * as emailjs from "emailjs-com";

class Lostpet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailSentModalOpen: false,
      isModalOpen: false,
       activeTab: "2",
       profileNameHolder:null
    };
    this.toggleModalEmailSent = this.toggleModalEmailSent.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.toggleModalEmailNotSent = this.toggleModalEmailNotSent.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
  }

  handleSubmit(values) {
    if (
      this.props.petcard.petcard[0].petId === values.petId
      // +
      //   this.props.userInfo.userInfo.userId ===
      // values.petId
    ) {
      let templateParams = {
        from: "PetProfile",
        to: this.props.userInfo.userInfo.profileInfo.email,
        subject: "PetFound",
        html: `Your Pet Was Found Please call ${values.phoneNumber} to contact the person who found them.`,
      };
      emailjs.send(
        "service_6u1iluk",
        "template_h94ookz",
        templateParams,
        "user_HqDyxgYEp2AfHpa0ga1B3"
      );
      this.toggleModalEmailSent();
    } else {
      this.toggleModalEmailNotSent();
    }

    this.props.resetLostPetForm();
  }

  toggleModalEmailSent() {
    this.setState(
      {
        isEmailSentModalOpen: true,
      },
      () => {
        setTimeout(this.handleClose, 3000);
      }
    );
  }

  handleClose = () => {
    this.setState({
      isEmailSentModalOpen: false,
    });
  };

  toggleModalEmailNotSent() {
    this.setState(
      {
        isEmailNotSentModalOpen: true,
      },
      () => {
        setTimeout(this.handleClose2, 3000);
      }
    );
  }

  handleClose2 = () => {
    this.setState({
      isEmailNotSentModalOpen: false,
    });
  };

  handleLogin = (values) => {
    // alert(
    //   `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    // );

    if (values.email) {
      alert("Logged In");
    } else {
      alert("Please Register First");
    }
    this.toggleModal();
  };

  handleRegister = (values) => {
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
   // this.toggleModalPetId();
    this.generateId();
  };

  generateId = () => {
    this.props.addUniqueId(uuid());
    
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  componentDidMount() {
    
    if( typeof this.props.userInfo.userInfo.profileInfo === 'undefined' ){
     
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    } 
    
  }

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }


  render() {
    return (
      <div>
        <h4 className="text-center m-3">Lost Pet Submission</h4>
        <Container>
          <Row>
            <Col>
              <Form
                model="lostPetForm"
                onSubmit={(values) => this.handleSubmit(values)}
                className="mx-auto"
              >
                <Row className="form-group">
                  <Label htmlFor="petId" md={2}>
                    Enter Lost Pet ID:
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".petId"
                      id="petId"
                      name="petId"
                      placeholder="Enter Lost Pet ID"
                      className="form-control"
                      validators={{}}
                    />
                    <Errors
                      className="text-danger"
                      model=".petId"
                      show="touched"
                      component="div"
                      messages={{}}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="phoneNumber" md={2}>
                    Phone Number:
                  </Label>
                  <Col md={8}>
                    <Control.text
                      model=".phoneNumber"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="form-control"
                      validators={{}}
                    />
                    <Errors
                      className="text-danger"
                      model=".phoneNumber"
                      show="touched"
                      component="div"
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" value="submit" color="primary">
                      Submit Lost Pet
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <Row>
            <Col>
              <Card className="m-2 lostPetCard">
                <CardBody>
                  <CardTitle>What Happens When Your Pet Is Lost?</CardTitle>
                  <CardText>
                    When you sign your pet up they will have a unique ID number.
                    Your pets identiy chip will have that unique ID number in it
                    available by NFC. When someone submits a lost ID the ID will
                    be matched to your profile and an email will be sent out to
                    you with the persons phone number who found your pet.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>

        <Modal backdrop="static" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
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
          isOpen={this.state.isEmailSentModalOpen}
          toggle={this.toggleModalEmailSent}
        >
          <ModalHeader toggle={this.toggleModalEmailSent}>
            Notification
          </ModalHeader>
          <ModalBody>Email was sent to the owner.</ModalBody>
        </Modal>

        <Modal
          isOpen={this.state.isEmailNotSentModalOpen}
          toggle={this.toggleModalEmailNotSent}
        >
          <ModalHeader toggle={this.toggleModalEmailNotSent}>
            Notification
          </ModalHeader>
          <ModalBody>Pet Id does not match!</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Lostpet;
