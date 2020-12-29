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

function Post(props) {
  return props.text.text.map((post) => {
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
                      src="./assets/Hugo2.png"
                      alt=""
                      style={{ width: "40px" }}
                    />
                    {/* {this.state.mainProfileName} */}
                  </div>

                  <div className="text-center">{post}</div>
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
        <Input
        type="textarea"
        color="primary"
      
        onClick={this.toggleModal}
        >
        </Input>

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
    console.log("Current state is: " + JSON.stringify(this.state));
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
      <div className="container " >
        <div id="postHead" className="row row-content" style={{position:"relative"}}>
          <div className="col-12 mx-auto p-2 " >
            <div className="flip-cardfeed ">
              <div
                className="flip-card-frontfeed rounded-lg"
                style={{ backgroundColor: "white" }}
              >
                <h3 className="projectreason text-nowrap">
                  <div style={{ fontSize: "12px"}}>
                    <img
                      id="music"
                      className="profileImg"
                      src="./assets/Hugo2.png"
                      alt=""
                      style={{ width: "40px" }}
                    />
                    {this.state.mainProfileName}
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
                    <Post text={this.props.text} />

                    {feedScroll}
                  </div>
                
              
           
      </div>
    );
  }
}

export default Feed;
