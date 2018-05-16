import React from 'react';
import Person from './Person/Person';

// if function is only one line, you can just use parenthesis and omit the {}

const persons = (props) => props.persons.map((person, index) => {
            return <Person 
              click={() => props.clicked(index)}
              name={person.name} 
              age={person.age}
              changed={(event)=> props.changed(event, person.id)} /> 
          });

  export default persons;