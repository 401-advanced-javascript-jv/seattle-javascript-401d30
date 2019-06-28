import React from 'react';
import { AppContext } from '../context/context';

export default class Form extends React.Component {
  static contextType = AppContext;

  render = () => {
    return (
      <form onSubmit={this.context.addItem}>
        <input
          placeholder="Add To Do List Item"
          onChange={this.context.handleInputChange}
        />
      </form>
    );
  };
}
