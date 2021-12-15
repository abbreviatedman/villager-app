import { Component } from "react";
import "./App.css";
import VillagerCard from "./components/VillagerCard";
import villagerData from "./data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      villagerData: villagerData,
      currentVillager: villagerData.wol00,
      villagers: [],
    };
  }

  changeVillager = () => {
    const { villagers } = this.state;
    const currentVillagerId = Math.ceil(
      Math.random() * Object.keys(villagerData).length
    );
    const currentVillager = Object.values(villagerData).find(
      (villager) => villager.id === currentVillagerId
    );

    this.setState({ currentVillager });
  };

  addVillager = () => {
    const { villagers, currentVillager } = this.state;

    this.setState({
      villagers: [...villagers, currentVillager],
    });
  };

  handleReset = () => {
    this.setState({
      villagers: [],
    });
  };

  render() {
    console.log(this.state);
    const { villagers, currentVillager } = this.state;
    const villagersToDisplay = villagers.map((villager, i) => {
      console.log(villager);
      return (
        <VillagerCard
          key={i}
          villager={villager}
          handleReset={this.handleReset}
        />
      );
    });

    return (
      <div className="App">
        <h1>Animal Crossing Villagers</h1>
        <div>
          <button onClick={this.changeVillager}>Change villager</button>
          <button onClick={this.addVillager}>Add villager to village</button>
          <button onClick={this.handleReset}>Clear Village</button>
          <div>
            Currently selected villager: {currentVillager.name["name-USen"]}
          </div>
          <div>Number of villagers in village: {villagers.length}</div>
          <div className="villager-grid">{villagersToDisplay}</div>
        </div>
      </div>
    );
  }
}

export default App;
