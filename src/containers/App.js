import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons'

class App extends Component {
  state = {
    persons: [
      { name: "Alex", age: 30 },
      { name: "Andy", age: 30 },
      { name: "Emma", age: 29 }
    ],
    showPersons: true
    }
  // switchNameHandler = (newName) => {
  //   // DONT DO THIS this.state.persons[0].name = "Alexander";
  //   // Use this.setState instead
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 30 },
  //       { name: "Andy", age: 30 },
  //       { name: "Emma", age: 30 }
  //     ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    // or...use the spread operator
    // const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons})

    // [
    //   { id: 123, name: "Alex", age: 30 },
    //   { id: 345, name: event.target.value, age: 30 },
    //   { id: 567, name: "Emma", age: 29 }
    // ]
    
  }

  togglePersons = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    }
    
    let persons = null;

    // EFFICIENT WAY TO RENDER MULTIPLE ITEMS

    if (this.state.showPersons) {
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
    }

    return (
      <div className="App">
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersons} />
          {persons}
        
      </div>
    );
  }
}

export default App;
