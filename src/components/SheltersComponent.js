import React, { Component } from "react";
import { FEED } from "../shared/feedObjects";

class Shelters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: FEED,
    };
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
          <div className="col-12 mx-auto p-2">{feedScroll}</div>
        </div>
      </div>
    );
  }
}

export default Shelters;
