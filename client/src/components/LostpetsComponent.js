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
import axios from "axios";
import classnames from "classnames";
import uuid from "react-uuid";
import * as emailjs from "emailjs-com";
import Register from "./register"
import Login from "./login"
const apiUserInfoDBs = axios.create({
  baseURL: "http://localhost:5000/api/userinfodbs/",
});
const apiPets = axios.create({
  baseURL: "http://localhost:5000/api/pets/",
});
class Lostpet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmailSentModalOpen: false,
      isModalOpen: false,
      activeTab: "2",
      profileNameHolder: null,
      pets:[],
      userinfo:[],
      userInfoDB:[]
    };
  }

  handleSubmit = (values) => {
console.log( this.state.pets.filter(element => element._id === values.petId)[0].userIdentity)

if (
 this.state.userinfo.userinfo.filter(ele => ele._id === this.state.pets.filter(element => element._id === values.petId)[0].userIdentity ).email

) {


}
    if (
      this.state.pets.filter(element => element._id === values.petId)

      //this.state.pets === values.petId
      // +
      //   this.props.userInfo.userInfo.userId ===
      // values.petId
    ) {
      let templateParams = {
        from: "PetProfile",
        to: this.state.userinfo.userinfo ,
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
  };

  toggleModalEmailSent = () => {
    this.setState(
      {
        isEmailSentModalOpen: true,
      },
      () => {
        setTimeout(this.handleClose, 3000);
      }
    );
  };

  handleClose = () => {
    this.setState({
      isEmailSentModalOpen: false,
    });
  };

  toggleModalEmailNotSent = () => {
    this.setState(
      {
        isEmailNotSentModalOpen: true,
      },
      () => {
        setTimeout(this.handleClose2, 3000);
      }
    );
  };

  handleClose2 = () => {
    this.setState({
      isEmailNotSentModalOpen: false,
    });
  };

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
    this.generateId();
  };

  generateId = () => {
    this.props.addUniqueId(uuid());
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  componentDidMount = () => {
    if(!this.props.auth.isAuthenticated){
         this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }


    apiPets
    .get("/")
    //.then((response) => response.json())
    .then((response) => {
      //console.log(response.data)
      console.log(response.data.pet)
      this.setState({ pets: response.data.pet }
       , () => console.log(this.state.pets)
      );
    })
    .catch((err) => {
      this.setState({ error: err });
    });

    apiUserInfoDBs
    .get("/alluserinfo")
    //.then((response) => response.json())
    .then((response) => {
      //console.log(response.data)
      //console.log(response.data)
      this.setState({ userinfo: response.data }
       , () => console.log(this.state.userinfo)
      );
    })
    .catch((err) => {
      this.setState({ error: err });
    });

    this.setState({userInfoDB: this.props.userinfodb})
  };


  
  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };
  render() {
    return (
      <div>
        <h4 className="text-center m-3" style={{ fontFamily: "Nunito",
                    fontWeight: "700",}}>Lost Pet Submission  </h4>
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
                   Lost Pet ID:
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

        <Modal
          backdrop="static"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader
            toggle={this.toggleModal}
            style={{
              backgroundColor: "#1b8eb1",
              color: "white",
              textShadow: "1px 1px 3px #363636 ",
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
              <Login toggleModal={this.toggleModal} addUserInfo={this.props.addUserInfo}/>
              </TabPane>
              <TabPane tabId="2">
             
              <Register toggleModal={this.toggleModal} addUserInfo={this.props.addUserInfo}/>
              </TabPane>
            </TabContent>
          </ModalBody>
        </Modal>

        <Modal
          isOpen={this.state.isEmailSentModalOpen}
          toggle={this.toggleModalEmailSent}
        >
          <ModalHeader
            toggle={this.toggleModalEmailSent}
            style={{
              backgroundColor: "#1b8eb1",
              color: "white",
              textShadow: "1px 1px 3px #363636",
            }}
          >
            Notification
          </ModalHeader>
          <ModalBody>Email was sent to the owner.</ModalBody>
        </Modal>

        <Modal
          isOpen={this.state.isEmailNotSentModalOpen}
          toggle={this.toggleModalEmailNotSent}
        >
          <ModalHeader
            toggle={this.toggleModalEmailNotSent}
            style={{
              backgroundColor: "#1b8eb1",
              color: "white",
              textShadow: "1px 1px 3px #363636",
            }}
          >
            Notification
          </ModalHeader>
          <ModalBody>Pet Id does not match!</ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Lostpet;
