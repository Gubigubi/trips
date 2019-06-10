import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

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

  render() {
    return (
      <div>
        <NavBar
          trips={this.state.trips}
          changeHandler={this.changeTrip.bind(this)}
        />
      </div>
    );
  }
}

export default App;
