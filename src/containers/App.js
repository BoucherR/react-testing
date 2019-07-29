import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 'qwer', name: 'Max', age: 28},
      { id: 'asdf', name: 'Manu', age: 56},
      { id: 'zxcv', name: 'Jeremy', age: 43}
    ],
    otherState: 'show some nonsense',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    //Finding the index of person
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    })
    //Creating a NEW OBJECT copy of that person
    const person = { 
      ...this.state.persons[personIndex]
    };
    //Assigning new name to the new person object
    person.name = event.target.value;
    //Copy of the current list of people
    const persons = [...this.state.persons];
    //Copying over old person with new person 
    persons[personIndex] = person;
    //Setting the updated state
    this.setState( {persons: persons} );
  } 

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {
      showPersons: !doesShow
    } );
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
        <div className="App">
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons} // boolean to know if button been clicked
            persons={this.state.persons} // state of persons
            clicked={this.togglePersonsHandler}
          />
          {persons}
        </div>
    );
    }
}

export default App;
