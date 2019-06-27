import React from 'react';
import { AppContext } from '../context/context';
import { When } from '../if';

export default class List extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <ul>
        {this.context.todoList &&
          this.context.todoList.map(item => (
            <li
              className={`complete-${item.complete.toString()}`}
              key={item.id}
            >
              <span onClick={() => this.context.toggleComplete(item.id)}>
                {item.text}
              </span>
              <button onClick={() => this.context.toggleEdit(item.id)}>
                edit
              </button>
              <When condition={this.context.editing === item.id}>
                <form onSubmit={this.context.updateItem}>
                  <input
                    onChange={this.context.handleInputChange}
                    id={item.id}
                    complete={item.complete}
                    defaultValue={item.text}
                  />
                </form>
              </When>
            </li>
          ))}
      </ul>
    );
  }
}
