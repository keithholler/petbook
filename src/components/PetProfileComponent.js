import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class PetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      imagePreviewUrl: "",
      firstName: "",
      lastName: "",
      animalType: "",
      breed: "",
      mainColor: "",
      secondaryColor: "",
      ownerFirstName: "",
      ownerLastName: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeForImage = this.handleChangeForImage.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
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
    console.log(this.props.uniqueId);

    return (
      <React.Fragment>
        <FormGroup className="d-flex flex-column col">
          <Label>Your Unique Pet Id</Label>
          {this.props.uniqueId}
        </FormGroup>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="d-flex justify-content-center">
            <FormGroup className="col-3 d-flex  align-items-center ">
              <div className=" d-flex flex-column ">
                <Label htmlFor="profileImage" className="align-self-center">
                  Upload Profile Image
                </Label>
                <Input
                  className="align-self-center"
                  type="file"
                  name="profileImage"
                  id="profileImage"
                  //value={this.state.profileImage}
                  onChange={this.handleChangeForImage}
                  style={{ fontSize: "12px" }}
                />
                <img
                  className="align-self-center"
                  src={this.state.imagePreviewUrl}
                  style={{ width: "150px" }}
                  alt="Profile of animal"
                />
              </div>
            </FormGroup>

            <FormGroup className="d-flex flex-column col">
              <FormGroup className="">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  innerRef={(input) => (this.firstName = input)}
                />
              </FormGroup>
              <FormGroup className="">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  innerRef={(input) => (this.lastName = input)}
                />
              </FormGroup>
              <FormGroup className="">
                <Label htmlFor="animalType">Animal Type</Label>
                <Input
                  type="text"
                  id="animalType"
                  name="animalType"
                  innerRef={(input) => (this.animalType = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="breed">Breed</Label>
                <Input
                  type="text"
                  id="breed"
                  name="breed"
                  innerRef={(input) => (this.breed = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="mainColor">Main Color</Label>
                <Input
                  type="text"
                  id="mainColor"
                  name="mainColor"
                  innerRef={(input) => (this.mainColor = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="secondaryColor">Secondary Color</Label>
                <Input
                  type="text"
                  id="secondaryColor"
                  name="secondaryColor"
                  innerRef={(input) => (this.secondaryColor = input)}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="ownerFirstName">Owner First Name</Label>
                <Input
                  type="text"
                  id="ownerFirstName"
                  name="ownerFirstName"
                  innerRef={(input) => (this.ownerFirstName = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="ownerLastName">Owner Last Name</Label>
                <Input
                  type="text"
                  id="ownerLastName"
                  name="ownerLastName"
                  innerRef={(input) => (this.ownerLastName = input)}
                />
              </FormGroup>
            </FormGroup>
          </FormGroup>
          <div className=" col  d-flex flex-row justify-content-center">
            <Button
              type="submit"
              value="submit"
              color="primary"
              className=" col-4"
            >
              Save
            </Button>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default PetProfile;
