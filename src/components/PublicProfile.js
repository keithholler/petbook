import React, { Component } from "react";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

function Post(props) {
  const profileName = props.userInfo.userInfo.profileInfo.profileName;

  return props.post.post.map((post) => {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 mx-auto p-2">
            <div className="flip-cardfeed ">
              <div
                className="flip-card-frontfeed rounded-lg"
                style={{ backgroundColor: "white" }}
              >
                <h3 className="projectreason text-nowrap">
                  {/* {props.userInfo.userPick} */}
                  <div style={{ fontSize: "12px" }}>
                    <img
                      id="music"
                      className="profileImg"
                      src={props.userInfo.userInfo.userPick}
                      alt=""
                      style={{ width: "40px" }}
                    />
                    {profileName ? profileName : "Not Logged In"}
                  </div>

                  <div className="text-center">{post.text} </div>
                  <div className="text-center">
                    <img style={{ width: "500px" }} src={post.postImage} />
                  </div>
                </h3>
              </div>
            </div>
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
                  src={pet.petImage}
                  alt=""
                  style={{ width: "70%" }}
                ></img>
              </div>
              <div className="flip-card-back rounded-lg">
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
                      className="d-flex flex-column align-items-stretch "
                      style={{ height: "50%", width: "108.4%" }}
                    >
                      <div
                        className="d-flex flex-column  align-items-stretch align-self-stretch text-break text-wrap"
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
              Hello I am
            </h3>
            {typeof this.props.userInfo.userInfo.profileInfo === "undefined" ||
            this.props.userInfo.userInfo.userPick === "localImageUrl" ? (
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
              And I am a web developer who creates user friendly functional
              websites.
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
