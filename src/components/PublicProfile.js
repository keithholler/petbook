import React, { Component } from "react";

import {
  Form,
  FormGroup,
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProfileName: "Keith",
      postText: "",
      postImage: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    this.setState({
      postText: "",
      postImage: "",
    });
  }

  render() {
    const pets = this.props.petcard.petcard.map((pet) => {
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

    const feedScroll = this.props.feed.feed.map((feed) => {
      return (
        <div className=" d-flex flex-column p-2 " key={feed.id}>
          <div className="flip-cardfeed ">
            <div
              className="flip-card-frontfeed rounded-lg border"
              style={{ backgroundColor: "white" }}
            >
              <h3 className="projectreason text-nowrap">
                <div style={{ fontSize: "12px", backgroundColor: "white" }}>
                  <img
                    id="profile"
                    className="profileImg"
                    src={feed.profileImg}
                    alt={feed.profileImg}
                    style={{ width: "40px" }}
                  />

                  {feed.profileName}
                </div>
                <div className="text-center">{feed.text}</div>
              </h3>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container ">
        <div className="row row-content-noborder row-content-topbord">
          <div className="col-md-18 mx-auto">
            <h3
              className=" text-nowrap text-center m-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ color: "black" }}
            >
              Hello I am
            </h3>

            <img
              className="rounded-circle me mx-auto d-block"
              data-aos="fade-up"
              data-aos-duration="1000"
              src="./assets/Hugo2.png"
              alt=""
              id="profile"
              style={{ width: "400px", height: "200px" }}
            />

            <h1
              className="name text-nowrap  text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ color: "black" }}
            >
              Keith
            </h1>

            <p
              className="intro text-no-wroap text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              And I am a web developer who creates user friendly functional
              websites.
            </p>
          </div>
        </div>

        <div className="border">
          {pets}
          {feedScroll}
        </div>
      </div>
    );
  }
}

export default PublicProfile;
