import React, { Component } from "react";

import {
  FormGroup,
  Button,
  ModalHeader,
  Modal,
  ModalBody,
  Label,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import { storage } from "../firebase";

function Post(props) {
  return props.post.post.map((post, index) => {
    return (
      <div className="container" key={index}>
        <div className="row row-content">
          <div className="col-12 mx-auto p-2">
            <div className="flip-cardfeed ">
              <div
                className="flip-card-frontfeed rounded-lg"
                style={{ backgroundColor: "white" }}
              >
                <h3 className="projectreason ">
                  {/* {props.userInfo.userPick} */}
                  <div style={{ fontSize: "12px" }}>
                    <img
                      id="music"
                      className="profileImg mr-2"
                      src={props.userPick}
                      alt=""
                      style={{ width: "40px" }}
                    />
                    {props.userInfo.userInfo.profileInfo.profileName
                      ? props.userInfo.userInfo.profileInfo.profileName
                      : "Not Logged In"}
                  </div>

                  <div
                    className="text-center text-break text-wrap"
                    style={{
                      fontSize: "calc(1em + 1vw)",
                      height: "auto!important",
                    }}
                  >
                    {post.text}
                  </div>
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
    this.props.postComment(values.text, this.state.feedPicPostURL);
  };
  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState({ feedPicPost: e.target.files[0] });
    }
  };
  handleUpload = (event) => {
    event.preventDefault();
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
  };

  render() {
    return (
      <div className="m-2">
        <Button
          type="submit"
          color="primary"
          outline
          className="fa-lg"
          onClick={this.toggleModal}
        >
          <i className="fa fa-pencil" /> Post
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
                  <button
                    type="button"
                    className="ml-4 btn btn-primary"
                    onClick={this.handleUpload}
                  >
                    Upload
                  </button>
                  <progress value={this.state.progressState} />
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
    return (
      <div className="container ">
        <div
          id="postHead"
          className="row row-content"
          style={{ position: "relative" }}
        >
          <div className="col-12 mx-auto p-2 ">
            <div className="flip-cardfeed ">
              <div
                className="flip-card-frontfeed rounded-lg"
                style={{ backgroundColor: "white" }}
              >
                <h3 className="projectreason text-nowrap">
                  <div style={{ fontSize: "12px" }}>
                    <img
                      id="music"
                      className="profileImg mr-2"
                      src={this.props.userInfo.userInfo.userPick}
                      alt=""
                      style={{ width: "40px" }}
                    />
                    {!typeof this.props.userInfo.userInfo.profileInfo ===
                    "undefined"
                      ? this.props.userInfo.userInfo.profileInfo.profileName
                      : "Not Logged In"}
                    <div className="border">
                      <PostForm postComment={this.props.postComment} />
                    </div>
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="border">
          <Post
            post={this.props.post}
            userInfo={this.props.userInfo}
            userPick={this.props.userInfo.userInfo.userPick}
          />
        </div>
      </div>
    );
  }
}

export default Feed;
