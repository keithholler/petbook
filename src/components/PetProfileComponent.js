import React, { Component, useEffect, useState, useMemo } from "react";
import {
  Button,
  Label,
  Row,
  Col,
  ModalHeader,
  Modal,
  ModalBody,
} from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
const required = (val) => val && val.length;
function Uni(props) {
  if (props.uniqueId.uniqueId) {
    return <div>{props.uniqueId.uniqueId}</div>;
  } else {
    return <div>Failed</div>;
  }
}

function ProfilePet(props) {
  return props.petcard.petcard.map((pet) => {
    return (
      <div className=" container-container col col-lg-6 ">
        <div className="flip-card-container mx-auto pr-3 pr-md-0 mb-5">
          <div className="flip-card ">
            <div
              className="flip-card-front rounded-lg text-center"
              style={{ color: "black" }}
            >
              <div>{pet.petcard.name}</div>

              <img
                id="profile"
                className="profileImg "
                src="./assets/Hugo2.png"
                alt=""
                style={{ width: "70%" }}
              ></img>
            </div>
            <div className="flip-card-back rounded-lg">
              <div
                style={{ color: "black" }}
                className="d-flex flex-column justify-content-center "
              >
                <div className="d-flex align-items-center justify-content-center">
                  <span>Type:{pet.petcard.animalType}</span>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  Breed: {pet.petcard.breed}
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  Main Color: {pet.petcard.mainColor}
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  Secondary Color: {pet.petcard.secondaryColor}
                </div>
                <div className="d-flex align-items-end justify-content-center">
                  Animals Id: {pet.petId}
                </div>
              </div>
            </div>
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
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    this.toggleModal();
    // const localImageUrl =  window.URL.createObjectURL(values.file[0]);
    this.props.addPetCard(uuid(), values);
  }

  render() {
    return (
      <div>
        <i
          className="fa fa-plus-circle fa-2x d-flex align-items-center"
          style={{ color: "black" }}
          onClick={this.toggleModal}
        />

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <Form
              model="petForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="name" md={2}>
                  Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".name"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                  
                  
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
                <Label htmlFor="animalType" md={2}>
                  Animal Type
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".animalType"
                    id="animalType"
                    name="animalType"
                    placeholder="Animal Type"
                    className="form-control"
                   
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
                  Breed
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".breed"
                    id="breed"
                    name="breed"
                    placeholder="Breed"
                    className="form-control"
                 
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
                  Main Color
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".mainColor"
                    id="mainColor"
                    name="mainColor"
                    placeholder="Main Color"
                    className="form-control"
                 
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
                  
                  />
                  <Errors
                    className="text-danger"
                    model=".secondaryColor"
                    show="touched"
                    component="div"
                   
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
      profileImage: "",
      profileName: "",
      firstName: "",
      lastName: "",
      email: "",
      animalType: "",
      breed: "",
      mainColor: "",
      secondaryColor: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeForImage = this.handleChangeForImage.bind(this);
  }
  handleSubmit(values) {
    const localImageUrl = window.URL.createObjectURL(values.profileImage[0]);
    this.props.addUserInfo(this.props.uniqueId.uniqueId, "localImageUrl", values);


    // this.props.resetProfileForm();
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleChangeForImage(event) {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        profileImage: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
        <h5 className="col-2">
        {this.props.userInfo.userInfo.profileInfo ? <Link  to="/PublicProfile">View Public Profile</Link>: ""}
          
          {/* <Link  to="/PublicProfile">View Public Profile</Link> */}
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
            <Label htmlFor="profileImage" md={2}>
              Profile Image
            </Label>
            <Col md={10}>
              <Control.file
                model=".profileImage"
                id="profileImage"
                name="profileImage"
                placeholder="Profile Image"
                className="form-control"
               
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
            <Col md={10}>
              <Control.text
                model=".profileName"
                id="profileName"
                name="profileName"
                placeholder={this.props.userInfo.userInfo.profileInfo ? this.props.userInfo.userInfo.profileInfo.profileName: ""}
                className="form-control"
                
                
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
            <Col md={10}>
              <Control.text
                model=".firstName"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="form-control"
               
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
            <Col md={10}>
              <Control.text
                model=".lastName"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="form-control"
          
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
            <Col md={10}>
              <Control.text
                model=".email"
                id="email"
                name="email"
                placeholder= {this.props.userInfo.userInfo.profileInfo ? this.props.userInfo.userInfo.profileInfo.email: ""}
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
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" value="submit" color="primary">
                Save
              </Button>
            </Col>
          </Row>

          <Row className="form-group mx-auto">
            <h2 className="mx-auto">Pets </h2>

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
