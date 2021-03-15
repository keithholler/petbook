import React, { Component } from "react";
import {
  Button,
  Label,
  Row,
  Col,
  ModalHeader,
  Modal,
  ModalBody,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { storage } from "../firebase";

function Uni(props) {
  if (props.uniqueId.uniqueId) {
    return <div>{props.uniqueId.uniqueId}</div>;
  } else {
    return <div>Failed</div>;
  }
}

function ProfilePet(props) {
  return props.petcard.petcard.map((pet, index) => {
    return (
      <div
        key={index}
        className="flip-card-container mx-auto pr-3 pr-md-0 mb-5"
      >
        <div className="flip-card ">
          <div
            className="flip-card-front rounded-lg text-center"
            style={{ color: "black" }}
          >
            <div style={{ fontFamily: "Fredoka One", fontWeight: "400" }}>
              {pet.petcard.name}
            </div>
            {pet.petImage === "" ? (
              <img
                id="profile"
                className="profileImg "
                src="/petbook/assets/petDefault.png"
                alt="profileImg"
                style={{ width: "90%", maxWidth: "100%", height: "90%" }}
              ></img>
            ) : (
              <img
                id="profile"
                className="profileImg "
                src={pet.petImage}
                alt="profileImg"
                style={{ width: "90%", maxWidth: "100%", height: "90%" }}
              ></img>
            )}
          </div>
          <div className="flip-card-back rounded-lg ">
            <Card
              style={{ height: "100%", width: "100%", overflow: "hidden" }}
              className="d-flex flex-column "
            >
              <CardTitle
                style={{
                  border: "1px solid #1b8eb1",
                  backgroundColor: "#1b8eb1",
                  color: "white",
                }}
              >
                <h5>Pet Info</h5>
              </CardTitle>
              <CardBody>
                <div className="d-flex flex-column  justify-content-around ">
                  <Row
                    className=" "
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #1b8eb1",
                    }}
                  >
                    <Col
                      md={4}
                      className="text-left d-flex align-items-center"
                      style={{
                        border: "1px solid #1b8eb1",
                        backgroundColor: "#1b8eb1",
                        color: "white",
                      }}
                    >
                      Type:
                    </Col>
                    <Col className="">{pet.petcard.animalType}</Col>
                  </Row>

                  <Row
                    className=" "
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #1b8eb1",
                    }}
                  >
                    <Col
                      md={4}
                      className="text-left d-flex align-items-center"
                      style={{
                        border: "1px solid #1b8eb1",
                        backgroundColor: "#1b8eb1",
                        color: "white",
                      }}
                    >
                      Breed:
                    </Col>
                    <Col className="">{pet.petcard.breed}</Col>
                  </Row>

                  <Row
                    className=" "
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #1b8eb1",
                    }}
                  >
                    <Col
                      md={4}
                      className="text-left d-flex align-items-center"
                      style={{
                        border: "1px solid #1b8eb1",
                        backgroundColor: "#1b8eb1",
                        color: "white",
                      }}
                    >
                      Main Color:
                    </Col>
                    <Col className="">{pet.petcard.mainColor}</Col>
                  </Row>

                  <Row
                    className=" "
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #1b8eb1",
                    }}
                  >
                    <Col
                      md={4}
                      className="text-left d-flex align-items-center"
                      style={{
                        border: "1px solid #1b8eb1",
                        backgroundColor: "#1b8eb1",
                        color: "white",
                      }}
                    >
                      Secondary Color:
                    </Col>
                    <Col className="">{pet.petcard.secondaryColor}</Col>
                  </Row>

                  <Row
                    className=" "
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #1b8eb1",
                    }}
                  >
                    <Col
                      md={4}
                      className="text-left d-flex align-items-center"
                      style={{
                        border: "1px solid #1b8eb1",
                        backgroundColor: "#1b8eb1",
                        color: "white",
                      }}
                    >
                      Animals Id:{" "}
                    </Col>
                    <Col className="">{pet.petId}</Col>
                  </Row>
                </div>
                <div className="d-flex flex-column  justify-content-around ">
                  <Row
                    className=" d-flex flex-column align-items-stretch "
                    style={{
                      border: "1px solid #1b8eb1",
                      backgroundColor: "#1b8eb1",
                      color: "white",
                    }}
                  >
                    About:
                  </Row>
                </div>

                <Row
                  className="d-flex flex-column"
                  style={{ height: "38%", width: "108.4%" }}
                >
                  <div
                    className="d-flex flex-column  text-break text-wrap overflow-auto"
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #1b8eb1",
                    }}
                  >
                    {pet.petcard.about}
                  </div>
                </Row>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  });
}

class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      touched: {
        author: false,
      },
      petImg: null,
      petImgURL: "",
      progressState: 0,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  handleSubmit = (values) => {
    this.toggleModal();
    // const localImageUrl =  window.URL.createObjectURL(values.file[0]);
    this.props.addPetCard(uuid(), values, this.state.petImgURL);
  };

  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState(
        { petImg: e.target.files[0] },
        (this.handleUpload = (event) => {
          console.log(this.state.petImg);
          const uploadTask = storage
            .ref(`images/${this.state.petImg.name}`)
            .put(this.state.petImg);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              this.setState({ progressState: progress });
            },
            (error) => {
              console.log(error);
            },
            () => {
              storage
                .ref("images")
                .child(this.state.petImg.name)
                .getDownloadURL()
                .then((url) => {
                  console.log(url);
                  this.setState({ petImgURL: url });
                  console.log(this.state.petImgURL);
                });
            }
          );
        })
      );
    }
  };

  render() {
    return (
      <div>
        <i
          className="fa fa-plus-circle fa-2x d-flex align-items-center btn btn-primary btn-sm"
          style={{ color: "", cursor: "pointer" }}
          onClick={this.toggleModal}
        />

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader
            toggle={this.toggleModal}
            style={{
              backgroundColor: "#1b8eb1",
              color: "white",
              textShadow: "1px 1px 3px #363636",
            }}
          >
            Animal Details
          </ModalHeader>
          <ModalBody>
            <Form
              model="petForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="name" md={2}>
                  Name:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    component="div"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="petImg" md={2}>
                  Pet Image
                </Label>

                <Col md={10}>
                  <Control.file
                    model=".petImg"
                    id="petImg"
                    name="petImg"
                    placeholder="Pet Image"
                    className="form-control"
                    onChange={this.handleChange}
                    style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
                  />
                  <Errors
                    className="text-danger"
                    model=".petImg"
                    show="touched"
                    component="div"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="animalType" md={2}>
                  Animal Type:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".animalType"
                    id="animalType"
                    name="animalType"
                    placeholder="Animal Type"
                    className="form-control"
                    style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
                  />
                  <Errors
                    className="text-danger"
                    model=".animalType"
                    show="touched"
                    component="div"
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="breed" md={2}>
                  Breed:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".breed"
                    id="breed"
                    name="breed"
                    placeholder="Breed"
                    className="form-control"
                    style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
                  />
                  <Errors
                    className="text-danger"
                    model=".breed"
                    show="touched"
                    component="div"
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="mainColor" md={2}>
                  Main Color:
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".mainColor"
                    id="mainColor"
                    name="mainColor"
                    placeholder="Main Color"
                    className="form-control"
                    style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
                  />
                  <Errors
                    className="text-danger"
                    model=".mainColor"
                    show="touched"
                    component="div"
                  />
                </Col>
              </Row>

              <Row className="form-group">
                <Label htmlFor="secondaryColor" md={2}>
                  Secondary Color
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".secondaryColor"
                    id="secondaryColor"
                    name="secondaryColor"
                    placeholder="Secondary Color"
                    className="form-control"
                    style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
                  />
                  <Errors
                    className="text-danger"
                    model=".secondaryColor"
                    show="touched"
                    component="div"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="about" md={2}>
                  About:
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".about"
                    id="about"
                    name="about"
                    placeholder="About"
                    className="form-control"
                    style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
                    validators={{}}
                  />
                  <Errors
                    className="text-danger"
                    model=".about"
                    show={true}
                    component="div"
                    messages={{
                      required: "Required",
                      maxLength: "Must be 108 characters or less",
                    }}
                  />
                </Col>
              </Row>

              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

class PetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: null,
      profileImageURL: "",
      profileName: "",
      firstName: "",
      lastName: "",
      email: "",
      animalType: "",
      breed: "",
      mainColor: "",
      secondaryColor: "",
      progressState: 0,
    };
  }
  handleSubmit = (values) => {
    this.props.addUserInfo(
      this.props.uniqueId.uniqueId,
      this.state.profileImageURL,
      values
    );

    // this.props.resetProfileForm();
  };

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState(
        { profileImage: e.target.files[0] },
        (this.handleUpload = () => {
          const uploadTask = storage
            .ref(`images/${this.state.profileImage.name}`)
            .put(this.state.profileImage);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              this.setState({ progressState: progress });
            },
            (error) => {
              console.log(error);
            },
            () => {
              storage
                .ref("images")
                .child(this.state.profileImage.name)
                .getDownloadURL()
                .then((url) => {
                  console.log(url);
                  this.setState({ profileImageURL: url });
                });
            }
          );
        })
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h5 className="col-2 ml-4 mt-2 text-nowrap">
            {this.props.userInfo.userInfo.profileInfo ? (
              <Link to="/PublicProfile" style={{ textDecoration: "none" }}>
                View Public Profile
              </Link>
            ) : (
              ""
            )}
          </h5>
        </div>

        <Form
          model="profileForm"
          onSubmit={(values) => this.handleSubmit(values)}
          className="ml-4"
        >
          <Row className="form-group">
            <Label htmlFor="profileImage" md={2}>
              Owners Id:
            </Label>
            <Col md={10}>
              <Uni uniqueId={this.props.uniqueId} />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="profileImage" md={2} className="">
              Profile Image
            </Label>
            <Col md={8}>
              <Control.file
                model=".profileImage"
                id="profileImage"
                name="profileImage"
                placeholder="Profile Image"
                className="form-control"
                onChange={this.handleChange}
                style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
              />
              <Errors
                className="text-danger"
                model=".profileImage"
                show="touched"
                component="div"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="profileName" md={2}>
              Profile Name
            </Label>
            <Col md={8}>
              <Control.text
                model=".profileName"
                id="profileName"
                name="profileName"
                placeholder={
                  this.props.userInfo.userInfo.userId
                    ? this.props.userInfo.userInfo.userId.profileName
                    : ""
                }
                className="form-control"
                style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
              />
              <Errors
                className="text-danger"
                model=".profileName"
                show="touched"
                component="div"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="firstName" md={2}>
              First Name
            </Label>
            <Col md={8}>
              <Control.text
                model=".firstName"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="form-control"
                style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
              />
              <Errors
                className="text-danger"
                model=".firstName"
                show="touched"
                component="div"
              />
            </Col>
          </Row>

          <Row className="form-group">
            <Label htmlFor="LastName" md={2}>
              Last Name
            </Label>
            <Col md={8}>
              <Control.text
                model=".lastName"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="form-control"
                style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
              />
              <Errors
                className="text-danger"
                model=".lastName"
                show="touched"
                component="div"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="email" md={2}>
              Email
            </Label>
            <Col md={8}>
              <Control.text
                model=".email"
                id="email"
                name="email"
                placeholder={
                  this.props.userInfo.userInfo.profileInfo
                    ? this.props.userInfo.userInfo.profileInfo.email
                    : ""
                }
                className="form-control"
                disabled={true}
              />
              <Errors
                className="text-danger"
                model=".email"
                show="touched"
                component="div"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="ownerAbout" md={2}>
              Owner About:
            </Label>
            <Col md={8}>
              <Control.textarea
                model=".ownerAbout"
                id="ownerAbout"
                name="aboownerAboutut"
                placeholder="About"
                className="form-control"
                style={{ boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.5)" }}
                validators={{}}
              />
              <Errors
                className="text-danger"
                model=".about"
                show={true}
                component="div"
                messages={{
                  required: "Required",
                  maxLength: "Must be 108 characters or less",
                }}
              />
            </Col>
          </Row>

          <Row className="form-group">
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" value="submit" color="primary">
                Save
              </Button>
            </Col>
          </Row>

          <Row className="form-group mx-auto align-items-center">
            <h2
              className="mr-2 "
              style={{
                cursor: "default",
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
            >
              Pets
            </h2>

            <AddPet addPetCard={this.props.addPetCard} />

            <Col className="mx-auto "></Col>
          </Row>
        </Form>

        <div className="container">
          <div
            className="row row-content justify-content-around"
            style={{ color: "black" }}
          >
            <ProfilePet
              petcard={this.props.petcard}
              uniqueId={this.props.uniqueId}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PetProfile;
