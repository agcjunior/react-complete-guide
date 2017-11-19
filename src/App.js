import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name:'Junior', age: 55},
      {name:'Maria', age: 58}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 56},
        { name: 'Maria do Carmo', age: 58}
      ]
    })
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 56},
        { name: 'Maria do Carmo', age: 58}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this,'AJ')}>Switch Name</button>
        <Person
           name={this.state.persons[0].name}
           age= {this.state.persons[0].age}
           click={this.switchNameHandler.bind(this,'Junior')}
           changed={this.nameChangedHandler}>My hobby is fishing</Person> 
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
