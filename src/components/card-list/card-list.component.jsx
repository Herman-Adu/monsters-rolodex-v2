import { Component } from "react";

class CardList extends Component {
  render() {
    console.log("Props - CardList:", this.props);
    console.log("Render from card list");

    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;
