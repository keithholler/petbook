import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from "reactstrap";

function Post(props) {
  const profileName = props.userInfo.userInfo.profileInfo.profileName;

  return props.post.post.map((post) => {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 mx-auto p-2">
            <Card className="m-2 lostPetCard"style={{ width: "auto", height: "auto",boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)" }}>
              <div class="card-horizontal">
                {typeof props.userInfo.userInfo.profileInfo === "undefined" ||
                props.userInfo.userInfo.userPick === "localImageUrl" ||
                this.props.userInfo.userInfo.userPick === "" ? (
                  <CardImg
                    id="music"
                    className="profileImg mr-2"
                    src="petbook/assets/default.png"
                    alt=""
                    style={{
                      width: "60px",
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                ) : (
                  <CardImg
                    id="music"
                    className="profileImg mr-2"
                    src={props.userInfo.userInfo.userPick}
                    alt=""
                    style={{
                      width: "60px",
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                )}

                <CardTitle
                  style={{ fontFamily: "Fredoka One", fontWeight: "200" }}
                  className="mt-2"
                >
                  {" "}
                  {typeof props.userInfo.userInfo.profileInfo === "undefined"
                    ? "Not Logged In"
                    : props.userInfo.userInfo.profileInfo.profileName}
                </CardTitle>
              </div>
              <CardBody
                className="mx-auto"
                style={{ width: "100%", height: "auto" }}
              >
                <CardText
                  className="text-center text-break text-wrap"
                  style={{
                    fontSize: "calc(.5em + 1vw)",
                    height: "auto!important",
                    fontFamily: "Nunito",
                    fontWeight: "400",
                  }}
                >
                  {post.text}
                </CardText>
                {post.postImage === null ? (
                  <div></div>
                ) : (
                  <CardImg
                    className="img-fluid mx-auto"
                    style={{
                      width: "70vh",
                      height: "auto",
                      objectFit: "contain",
                      objectPosition: "50% 50%",
                      display: "block",
                    }}
                    src={post.postImage}
                  />
                )}
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  });
}

class PublicProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProfileName: "Keith",
      postText: "",
      postImage: "",
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Current state is: " + JSON.stringify(this.state));
    this.setState({
      postText: "",
      postImage: "",
    });
  };

  render() {
    console.log(this.props.userInfo.userInfo.profileInfo.profileName);
    const pets = this.props.petcard.petcard.map((pet, index) => {
      return (
        <div key={index} className=" container-container col col-lg-6 ">
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
                    src="petbook/assets/petDefault.png"
                    alt=""
                    style={{ width: "90%", maxWidth: "100%", height: "90%" }}
                  ></img>
                ) : (
                  <img
                    id="profile"
                    className="profileImg "
                    src={pet.petImage}
                    alt=""
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
              Hello I am {this.props.userInfo.userInfo.profileInfo.firstName}
            </h3>
            {typeof this.props.userInfo.userInfo.profileInfo === "undefined" ||
            this.props.userInfo.userInfo.userPick === "localImageUrl" ||
            this.props.userInfo.userInfo.userPick === "" ? (
              <img
                className="rounded-circle me mx-auto d-block"
                data-aos="fade-up"
                data-aos-duration="1000"
                src="petbook/assets/default.png"
                alt=""
                id="profile"
                style={{ width: "200px", height: "200px" }}
              />
            ) : (
              <img
                className="rounded-circle me mx-auto d-block"
                data-aos="fade-up"
                data-aos-duration="1000"
                src={this.props.userInfo.userInfo.userPick}
                alt=""
                id="profile"
                style={{ width: "200px", height: "200px" }}
              />
            )}

            <h1
              className="name text-nowrap  text-center mb-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ color: "black" }}
            ></h1>

            <p
              className="intro text-no-wroap text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {this.props.userInfo.userInfo.profileInfo.ownerAbout}
            </p>
          </div>
        </div>

        <div className="row row-content justify-content-around">
          {pets}
          <Post post={this.props.post} userInfo={this.props.userInfo} />
        </div>
      </div>
    );
  }
}

export default PublicProfile;
