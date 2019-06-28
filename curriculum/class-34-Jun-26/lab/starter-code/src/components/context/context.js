import React from 'react';
import uuid from 'uuid';

export const AppContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      todoList: [],
      item: {},
      editing: false,
      toggleEdit: this.toggleEdit,
      saveItem: this.saveItem,
      toggleComplete: this.toggleComplete,
      updateItem: this.updateItem,
      addItem: this.addItem,
      handleInputChange: this.handleInputChange,
    };
  }

  handleInputChange = (e) => {
    let item = {
      text: e.target.value,
      complete: !!e.target.complete,
      id: e.target.id || uuid(),
    };
    this.setState({ item });
  };

  addItem = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({ todoList: [...this.state.todoList, this.state.item] });
  };

  updateItem = (e) => {
    e.preventDefault();
    this.saveItem(this.state.item);
  };

  toggleComplete = (id) => {
    let item = this.state.todoList.filter((i) => i.id === id)[0] || {};
    if (item.id) {
      item.complete = !item.complete;
      this.saveItem(item);
    }
  };

  saveItem = (updatedItem) => {
    this.setState({
      todoList: this.state.todoList.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
      editing: false,
    });
  };

  toggleEdit = (id) => {
    let editing = this.state.editing === id ? false : id;
    this.setState({ editing });
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
