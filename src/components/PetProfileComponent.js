import React, { Component, useEffect, useState, useMemo } from "react";
import {
  Button,
  Label,
  Row,
  Col,
  ModalHeader,
  Modal,
  ModalBody,
  FormGroup,
} from "reactstrap";
import { Control, Form, LocalForm, Errors } from "react-redux-form";
//import {useDropzone} from 'react-dropzone';
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
      <div class="square-box m-2 ">
        <div class="square-content">
          <div>
            <span style={{color:"black"}}>
              {pet}
              </span>
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
    this.props.addPetCard(values.text);
  }
  render() {
    return (
      <div class="square-box  m-2 ">
        <div class="square-content">
          <div>
            <span>
              <Button
                type="submit"
                value="submit"
                color="primary"
                onClick={this.toggleModal}
              >
                <i class="fa fa-plus-circle" />
              </Button>
            </span>
          </div>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="text">Comment</Label>
                <Control.textarea
                  model=".text"
                  id="text"
                  name="text"
                  rows="6"
                  className="form-control"
                  defaultValue=""
                />
              </div>
              <div className="form-group">
                <FormGroup>
                  <Control.file
                    model=".file"
                    id="file"
                    name="file"
                    placeholder="Image"
                    className="form-control"
                  />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">
                  Submit
                </Button>
              </div>
            </LocalForm>
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
    this.props.addUserInfo(this.props.uniqueId.uniqueId, localImageUrl, values);
    console.log(values.profileImage[0]);
    console.log(values);

    this.props.resetProfileForm();
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
          <h3 className="col-2">Your Unique Pet Id:</h3>
          <h3 className="col">
            <Uni uniqueId={this.props.uniqueId} />
          </h3>
        </div>

        <Form
          model="profileForm"
          onSubmit={(values) => this.handleSubmit(values)}
          className="ml-4"
        >
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
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".profileImage"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                }}
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
                placeholder="Profile Name"
                className="form-control"
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".profileName"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                }}
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
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".firstName"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                }}
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
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".lastName"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                }}
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
                placeholder="Email"
                className="form-control"
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".email"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                }}
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
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".animalType"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                }}
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
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".breed"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                }}
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
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".mainColor"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
                }}
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
                validators={{
                  required,
                }}
              />
              <Errors
                className="text-danger"
                model=".secondaryColor"
                show="touched"
                component="div"
                messages={{
                  required: "Required",
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

          <Row className="form-group mx-auto">
            <h2 className="mx-auto">Pets</h2>
            <Col className="mx-auto "></Col>
          </Row>
        </Form>
        <div className="d-flex flex-row ml-4">
          <ProfilePet petcard={this.props.petcard}  />

          <AddPet addPetCard={this.props.addPetCard} />
        </div>
      </React.Fragment>
    );
  }
}

export default PetProfile;
