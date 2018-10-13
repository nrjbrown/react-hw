import React from 'react';

//  should be the same name as the component
// function in lower case
//  ************
// NOTE: A component is a function that returns some JSX.
// *************
const person = (props) => {
  return (
    <div>
      <p>Hi my name is {props.name} and I am {props.age} year old</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person;

// note for a function based component, you can pass/receive information in the using {props.props name}
//  for a balss based component, you have to use {this.props}