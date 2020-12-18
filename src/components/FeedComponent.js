import React, { Component } from "react";
import { FEED } from "../shared/feedObjects";
//import { Form, Button } from "react-bootstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: FEED,
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

//   componentDidMount() {
//     document.body.style.backgroundColor = "blue"
// }

  render() {
      
    const feedScroll = this.state.feed.map((feed) => {
      return (

        
        <div className=" d-flex flex-column  " key={feed.id}>
          <div className="flip-card ">
            <div className="flip-card-front rounded-lg"style={{backgroundColor:"white" }}>
              <h3 className="projectreason text-nowrap">
                <div style={{ fontSize: "12px", backgroundColor:"white" }}>
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
              <div className="flip-card-front rounded-lg"style={{backgroundColor:"white" }}>
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
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                   
                      <Input
                        type="textarea"
                        id="postText"
                        name="postText"
                        rows="3"
                        value={this.state.postText}
                        onChange={this.handleInputChange}
                        className="textArea"
                      ></Input>
                      
                      <Input
                        type="file"
                        name="postImage"
                        id="postImage"
                        value={this.state.postImage}
                        onChange={this.handleInputChange}
                        style={{ fontSize: "12px" }}
                      />

                      <Button type="submit" value="submit" color="primary">
                        Post
                      </Button>
                    </FormGroup>
                  </Form>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12 mx-auto p-2">{feedScroll}</div>
        </div>
      </div>
    );
  }
}

export default Feed;
