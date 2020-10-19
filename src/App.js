import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './pages/todo'
import { Provider } from 'react-redux'

import configureStore from "./todoredux/store";

const reduxStore = configureStore();


export default class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
       
           
          
          <Todo />
     
</Provider>
    );
  }
};
