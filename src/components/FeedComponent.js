import React, { Component } from "react";

import {
  FormGroup,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  Label,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  TabPane,
  TabContent,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Control, LocalForm, Form } from "react-redux-form";
import { storage } from "../firebase";
import classnames from "classnames";
import uuid from "react-uuid";
function Post(props) {
  return props.post.post.map((post, index) => {
    return (
      <div className="container" key={index}>
        <div className="row row-content">
          <div className="col-12 mx-auto p-2" >
            <Card className="m-2 lostPetCard" style={{ width: "auto", height: "auto",boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)" }}>
              <div class="card-horizontal">
                {typeof props.userInfo.userInfo.profileInfo === "undefined" ||
                props.userInfo.userInfo.userPick === "localImageUrl" ||
                this.props.userInfo.userInfo.userPick === "" ? (
                  <CardImg
                    id="music"
                    className="profileImg mr-2 ml-2 mt-2"
                    src="/petbook/assets/default.png"
                    alt="profileImg"
                    style={{
                      width: "60px",
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                ) : (
                  <CardImg
                    id="music"
                    className="profileImg mr-2 ml-2 mt-2"
                    src={props.userInfo.userInfo.userPick}
                    alt="profileImg"
                    style={{
                      width: "60px",
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                    }}
                  />
                )}

                <CardTitle
                  style={{ fontFamily: "Fredoka One", fontWeight: "200" }}
                  className="mt-4"
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
                  className="text-center text-break text-wrap "
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
                      verticalAlign:"top"
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

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      touched: {
        author: false,
      },
      feedPicPost: null,
      feedPicPostURL: null,
      progressState: 0,
      text: null,
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  handleSubmit = (values) => {
    this.toggleModal();

    this.props.postComment(values.text, this.state.feedPicPostURL);
  };
  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState(
        { feedPicPost: e.target.files[0] },
        (this.handleUpload = () => {
          const uploadTask = storage
            .ref(`images/${this.state.feedPicPost.name}`)
            .put(this.state.feedPicPost);
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
                .child(this.state.feedPicPost.name)
                .getDownloadURL()
                .then((url) => {
                  console.log(url);
                  this.setState({ feedPicPostURL: url });
                });
            }
          );
        })
      );
    }
  };

  render() {
    return (
      <div className="m-2">
        <Modal isOpen={this.state.isCropOpen} toggle={this.toggleModalCropOpen}>
          <ModalHeader
            toggle={this.toggleModalCropOpen}
            style={{
              backgroundColor: "#1b8eb1",
              color: "white",
              textShadow: "1px 1px 3px #363636",
            }}
          >
            Crop
          </ModalHeader>
          <ModalBody
            style={{ width: "100%", height: "400px", objectFit: "none" }}
          ></ModalBody>
        </Modal>
        <Button
          type="submit"
          color="primary"
          outline
          className="fa-sm"
          onClick={this.toggleModal}
        >
          <i className="fa fa-pencil " /> Post
        </Button>

        <div className="rectangle rounded" onClick={this.toggleModal}></div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader
            toggle={this.toggleModal}
            style={{
              backgroundColor: "#1b8eb1",
              color: "white",
              textShadow: "1px 1px 3px #363636",
            }}
          >
            Submit Comment
          </ModalHeader>
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
                  style={{
                    fontFamily: "Nunito",
                    fontWeight: "400",
                  }}
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
                    onChange={this.handleChange}
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

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProfileName: "Keith",
      postText: "",
      postImage: "",
      activeTab: "2",
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
    if (typeof this.props.userInfo.userInfo.profileInfo === "undefined") {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }
  };
  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };
  render() {
    return (
      <div className="container ">
        <div
          id="postHead"
          className="row row-content"
          style={{ position: "relative" }}
        >
          <div className="col-12 mx-auto p-2 ">
            <Card className="m-2 lostPetCard">
              <div class="card-horizontal">
                {typeof this.props.userInfo.userInfo.profileInfo ===
                  "undefined" ||
                this.props.userInfo.userInfo.userPick === "localImageUrl" ||
                this.props.userInfo.userInfo.userPick === "" ? (
                  <CardImg
                    id="music"
                    className="profileImg m-2"
                    src="/petbook/assets/default.png"
                    alt="profileImg"
                    style={{ width: "40px" }}
                  />
                ) : (
                  <CardImg
                    id="music"
                    className="profileImg m-2"
                    src={this.props.userInfo.userInfo.userPick}
                    alt="profileImg"
                    style={{ width: "40px" }}
                  />
                )}

                <CardTitle
                  style={{ fontFamily: "Fredoka One", fontWeight: "200" }}
                  className="mt-3"
                >
                  {" "}
                  {typeof this.props.userInfo.userInfo.profileInfo ===
                  "undefined"
                    ? "Not Logged In"
                    : this.props.userInfo.userInfo.profileInfo.profileName}
                </CardTitle>
              </div>
              <div className="border">
                <PostForm postComment={this.props.postComment} />
              </div>
            </Card>
          </div>
        </div>
        <div className="">
          <Post
            post={this.props.post}
            userInfo={this.props.userInfo}
            userPick={this.props.userInfo.userInfo.userPick}
          />
        </div>
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
      </div>
    );
  }
}

export default Feed;
