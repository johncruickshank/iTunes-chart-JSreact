import React from "react";

class Song extends React.Component {
  render() {
    return (
      <div className="single">
        <h5>{this.props.position}: {this.props.title}, {this.props.artist}</h5>
      </div>
    )
  }
}

export default Song;
