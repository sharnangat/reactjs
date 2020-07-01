import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Person from "./Person/Person";
import Item from "./Person/Item";

import UserInput from "./UserInput/UserInput";
import UserOutput from './UserOutput/UserOutput';

function App() {
  return (
    <div className="App">
        <h1> It is working for  me sanjay</h1>
    
                <Person name="sanjay"/>
                <Person name="Amruta"/>
                <Item name="ItemFrom"/>

      <UserInput/>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>
      <UserOutput/>


    </div>
  );
}

export default App;
