import React from 'react';
import Chart from "../components/Chart";

class MusicContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    console.log("test");
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", () => {
      if(request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({songs: data.feed.entry});
      }
    });
    request.send();
  }

  render() {
    return (
      <div>
        <h2>Top 20 UK Single's</h2>
        <Chart songs={this.state.songs}/>
      </div>
    )
  }
}

export default MusicContainer;
