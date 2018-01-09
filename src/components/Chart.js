import React from "react";
import Song from "./Song";

class Chart extends React.Component {
  render() {
    if(!this.props.songs) return null;
    const songNodes = this.props.songs.map((song, index) => {
      return (
        <Song
          position={index+1}
          title={song["im:name"].label}
          artist={song["im:artist"].label}
          key={index}>
        </Song>
      )
    })

    return (
      <div className="singles-chart">
        {songNodes}
      </div>
    )
  }
}

export default Chart;
