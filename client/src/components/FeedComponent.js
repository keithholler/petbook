import React, { Component } from "react";
import axios from "axios";
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
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import { storage } from "../firebase";
import classnames from "classnames";
import uuid from "react-uuid";
import Register from "./register";
import Login from "./login";

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
    //alert(this.props.postreducer.body)
    this.toggleModal();
    this.props.userPost("This is a Title Test", values.text);
    this.props.postComment(values.text, this.state.feedPicPostURL);
 
     
    setTimeout(() => this.props.rerenderParentCallback(), 1000)
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

const apiPser = axios.create({
  baseURL: "http://localhost:5000/api/users/",
});

const apiPosts = axios.create({
  baseURL: "http://localhost:5000/api/posts/",
});

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainProfileName: "Keith",
      postText: "",
      postImage: "",
      activeTab: "2",
      data: [],
      posts: [],
      error: "",
    };

    // api.get('/',{
    //   headers:{
    //     "Authorization":localStorage.getItem("jwtToken"),
    //     "Content-Type":"application/json",
    //     'Access-Control-Allow-Origin':'*'
    //   }
    // })
    // .then(response => {
    //   response.statusCode = 200;
    //   response.setHeader("Content-Type", "application/json","Access-Control-Allow-Origin", "*");
    //  console.log(response.data)
    // });
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
    }
    );

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
    if (!this.props.auth.isAuthenticated) {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }

    apiPosts
      .get("/allpost")
      //.then((response) => response.json())
      .then((response) => {
        //console.log(response.data)
        this.setState({ posts: response.data }
        //  , () => console.log(this.state.posts)
        );
      })
      .catch((err) => {
        this.setState({ error: err });
      });
    if (this.state.error || !Array.isArray(this.state.posts)) {
      return console.log("This is not an array");
    }
  };

  // componentDidUpdate(prevProps) {
  //   console.log(prevProps.post.post)
  //   console.log(this.state.posts.posts)
  //   if (prevProps.post.post !== [] || prevProps.post.post !== this.state.posts.posts ) {
  //     console.log("hi")
  //   }
  // }
  rerenderParentCallback = () => {
    apiPosts
    .get("/allpost")
    //.then((response) => response.json())
    .then((response) => {
      console.log(response.data)
      this.setState({ posts: response.data }
      //  , () => console.log(this.state.posts)
      );
    })
    .catch((err) => {
      this.setState({ error: err });
    });
  if (this.state.error || !Array.isArray(this.state.posts)) {
    return console.log("This is not an array ");
  }
  }

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };
  render() {

    
    console.log(`Parent rendered.`);
    //console.log(props.posts.posts)
    //return   props.postreducer.post.filter(id =>id.postedBy._id === props.auth.user.id).map((post, index) => {
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
                  {!this.props.auth.isAuthenticated
                    ? "Not Logged In"
                    : this.props.auth.user.name}
                </CardTitle>
              </div>
              <div className="border">
                <PostForm
                  postComment={this.props.postComment}
                  userPost={this.props.userPost}
                  postreducer={this.props.postreducer}
                  rerenderParentCallback={this.rerenderParentCallback}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className="">
          {typeof this.state.posts.posts === "undefined" ? (
            <div></div>
          ) : (
            this.state.posts.posts.map((post, index) => {
              return (
                <div className="container" key={index}>
                  <div className="row row-content">
                    <div className="col-12 mx-auto p-2">
                      <Card
                        className="m-2 lostPetCard"
                        style={{
                          width: "auto",
                          height: "auto",
                          boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.5)",
                        }}
                      >
                        <div class="card-horizontal">
                          {typeof this.props.userInfo.userInfo.profileInfo ===
                            "undefined" ||
                          this.props.userInfo.userInfo.userPick ===
                            "localImageUrl" ||
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
                              src={this.props.userInfo.userInfo.userPick}
                              alt="profileImg"
                              style={{
                                width: "60px",
                                objectFit: "cover",
                                objectPosition: "50% 50%",
                              }}
                            />
                          )}

                          <CardTitle
                            style={{
                              fontFamily: "Fredoka One",
                              fontWeight: "200",
                            }}
                            className="mt-4"
                          >
                            {" "}
                            {post.postedBy.map((item, i) => {
                              return (
                                <div style={{ color: "black" }} key={i}>
                                  {item.name}
                                </div>
                              );
                            })}
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
                            {post.body}
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
                                verticalAlign: "top",
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
            })
          )}

          {/* <Post
            post={this.props.post}
            userInfo={this.props.userInfo}
            userPick={this.props.userInfo.userInfo.userPick}
            auth={this.props.auth}
            userPost={this.props.userPost}
            postreducer={this.props.postreducer}
            posts={this.state.posts}
          />  */}
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
                <Login
                  toggleModal={this.toggleModal}
                  addUserInfo={this.props.addUserInfo}
                />
              </TabPane>
              <TabPane tabId="2">
                <Register
                  toggleModal={this.toggleModal}
                  addUserInfo={this.props.addUserInfo}
                />
              </TabPane>
            </TabContent>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Feed;
