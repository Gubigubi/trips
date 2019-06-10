import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Details from './containers/Details';

const data = [
  {
    id: Math.random(),
    city: 'New York',
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    id: Math.random(),
    city: 'Tokyo',
    dateStart: new Date(),
    dateEnd: new Date(),
  },
  {
    id: Math.random(),
    city: 'London',
    dateStart: new Date(),
    dateEnd: new Date(),
  },
];

class App extends Component {
  state = {
    trips: data,
    pickedId: null,
  };

  changeTrip(id) {
    this.setState({ pickedId: id });
  }
  changheTripsProp(id, prop, value) {
    const modEl = this.state.trips.find((el) => el.id === id);
    modEl[prop] = value;
    if (prop === 'dateStart') {
      this.setState((prevState) => {
        return {
          trips: prevState.trips
            .map((item) => {
              if (item.id !== id) return item;
              return {
                ...modEl,
              };
            })
            .sort((a, b) => a.dateStart - b.dateStart),
        };
      });
    } else {
      this.setState((prevState) => {
        return {
          trips: prevState.trips.map((item) => {
            if (item.id !== id) return item;
            return {
              ...modEl,
            };
          }),
        };
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar
          trips={this.state.trips}
          changeHandler={this.changeTrip.bind(this)}
        />
        {this.state.pickedId && (
          <Details
            pickedId={this.state.pickedId}
            trips={this.state.trips}
            changeHandler={this.changheTripsProp.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default App;
