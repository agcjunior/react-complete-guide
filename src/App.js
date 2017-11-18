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

  switchNameHandler = () => {
    //console.log('was clicked');
    // DON'T DO THIS: this.state.persons[0].name='outro nome'
    this.setState({
      persons: [
        {name:'Antonio Junior', age: 56},
        {name:'Maria do Carmo', age: 58}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age} >My hobby is fishing</Person>
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
