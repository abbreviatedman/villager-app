import { Component } from "react";

class VillagerCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props.villager)
    const { image_uri, name } = this.props.villager;
    return (
      <div className="villager-card">
        <img src={image_uri} alt="villager" />
        <button onClick={this.props.handleReset}>reset</button>
      </div>
    );
  }
}

export default VillagerCard;
