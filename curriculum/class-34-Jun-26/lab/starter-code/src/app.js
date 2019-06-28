import React from 'react';

import ToDo from './components/todo/todo.js';
import ContextProvider from './components/context/context.js';

export default class App extends React.Component {
  render() {
    return (
      <ContextProvider>
        <ToDo />
      </ContextProvider>
    );
  }
}
