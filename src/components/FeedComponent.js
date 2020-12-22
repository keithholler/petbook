import React, { Component } from "react";
import { FEED } from "../shared/feedObjects";
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

function Post(props) {
  if (props.text.text === "default") {
    return <div></div>;
  } else {
    return (
      <div className="container">
        <div className="row row-content">
          <div className="col-12 mx-auto p-2">
            <div className="flip-card ">
              <div
                className="flip-card-front rounded-lg"
                style={{ backgroundColor: "white" }}
              >
                <h3 className="projectreason text-nowrap">
                  <div style={{ fontSize: "12px" }}>
                    <img
                      id="music"
                      className="profileImg"
                      src="./assets/Hugo2.png"
                      alt=""
                      style={{ width: "40px" }}
                    />
                    {/* {this.state.mainProfileName} */}
                  </div>

                  <div className="text-center">{props.text.text}</div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
    this.props.postComment(values.text);
  }

  render() {
    return (
      <div>
        <Button
          type="submit"
          outline
          className="fa-lg"
          onClick={this.toggleModal}
        >
          <i className="fa fa-pencil" /> Post
        </Button>

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
      // feed: FEED,
      mainProfileName: "Keith",
      postText: "",
      postImage: "",
      feed: [
        {
          id: 0,
          profileImg: "./assets/Piper2.png",
          profileName: "Keith",
          text: "What a magnificent view!",
        },
        {
          id: 1,
          profileImg: "./assets/Piper2.png",
          profileName: "Marley ",
          text: "Go Out On a Limb",
        },
        {
          id: 2,
          profileImg: "./assets/Piper2.png",
          profileName: "Darrel",
          text: "Cut To The Chase",
        },
      ],
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
    const feedScroll = this.state.feed.map((feed) => {
      return (
        <div className=" d-flex flex-column  " key={feed.id}>
          <div className="flip-card ">
            <div
              className="flip-card-front rounded-lg"
              style={{ backgroundColor: "white" }}
            >
              <h3 className="projectreason text-nowrap">
                <div style={{ fontSize: "12px", backgroundColor: "white" }}>
                  <img
                    id="music"
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
      <div className="container">
        <div className="row row-content">
          <div className="col-12 mx-auto p-2">
            <div className="flip-card ">
              <div
                className="flip-card-front rounded-lg"
                style={{ backgroundColor: "white" }}
              >
                <h3 className="projectreason text-nowrap">
                  <div style={{ fontSize: "12px" }}>
                    <img
                      id="music"
                      className="profileImg"
                      src="./assets/Hugo2.png"
                      alt=""
                      style={{ width: "40px" }}
                    />
                    {this.state.mainProfileName}
                  </div>

                  <PostForm postComment={this.props.postComment} />
                  <div>
                    <Post text={this.props.text} />

                    {feedScroll}
                  </div>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
