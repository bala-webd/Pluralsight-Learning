import React, { Component } from "react";

class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt="75" style={{ width: 75 }} />
        <div
          className="info"
          style={{ display: "inline-block", marginLeft: 12 }}
        >
          <div
            className="name"
            style={{ fontSize: "1.25rem", fontWeight: "bold" }}
          >
            {profile.name}
          </div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
