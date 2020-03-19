import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';

class App extends Component {
  state = {
    searchField: '',
    robots: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robots: data }));
  }

  handleChange = ({ target }) => {
    this.setState({ searchField: target.value })
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = [...robots].filter(robot => (
      robot.name.toLowerCase().includes(searchField)
    ));

    return (
      <div className='App'>
        <h1>Weired Robots</h1>
        <SearchBox value={searchField} onChange={this.handleChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
