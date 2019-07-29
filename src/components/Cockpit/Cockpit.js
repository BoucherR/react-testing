import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';

    if (props.showPersons) btnClass = 'Red'; 

    if (props.persons.length <= 2) {
      assignedClasses.push('red');
    }
    if (props.persons.length <= 1) {
      assignedClasses.push('bold');
    }
    
    return (
        <div className={'Cockpit'}>
            <h1>Hey, I'm a react app</h1>      
            <p className={assignedClasses.join(' ')}>This is going to model a list of people</p>
            <button 
            onClick={props.clicked} 
            className={btnClass}>Toggle Persons </button>
        </div>
    );
};

export default cockpit;