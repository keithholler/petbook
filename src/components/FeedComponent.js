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

function Post(props) {
  return props.text.text.map((post, index) => {
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
                      src="petbook/assets/default.png"
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
    this.props.postComment(values.text);
  }

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

class Feed extends Component {
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
    alert("Current state is: " + JSON.stringify(this.state));
    this.setState({
      postText: "",
      postImage: "",
    });
  }

  render() {
    const feedScroll = this.props.feed.feed.map((feed) => {
      return (
        <div className=" d-flex flex-column p-2 " key={feed.id}>
          <div className="flip-cardfeed ">
            <div
              className="flip-card-frontfeed rounded-lg border feed"
              style={{ backgroundColor: "white" }}
            >
              <h3 className="projectreason text-nowrap ">
                <div style={{ fontSize: "12px" }}>
                  <img
                    id="profile"
                    className="profileImg mr-2"
                    src="petbook/assets/default.png"
                    alt={feed.profileImg}
                    style={{ width: "40px" }}
                  />

                  {feed.profileName}
                </div>
                <div
                  className="text-center text-break text-wrap"
                  style={{ fontSize: "calc(1em + 1vw)" }}
                >
                  {feed.text}
                </div>
              </h3>
            </div>
          </div>
        </div>
      );
    });

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
                      src="petbook/assets/default.png"
                      alt=""
                      style={{ width: "40px" }}
                    />
                    {this.props.userInfo.userInfo.profileInfo.profileName
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
          <Post text={this.props.text} userInfo={this.props.userInfo} />

          {feedScroll}
        </div>
      </div>
    );
  }
}

export default Feed;
