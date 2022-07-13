import React, { Component, createElement } from "react";
import "./index.css";
import ListItems from "./ListItems";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
      editValue: "",
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  addList = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteItem = (key) => {
    const filterItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filterItems,
    });
  };

  handleEditChange = (e) => {
    this.setState({
      editValue: e.target.value,
    });
    console.console.log(e);
  };

  editItem = (key) => {
    this.setState({
      isDisabled : false
    })
  };

  render() {
    return (
      <div className="container">
        <div className="todo">
          <h1>Add Todo List</h1>
          <form onSubmit={this.addList}>
            <input
              type="text"
              placeholder="Enter Your Task"
              value={this.state.currentItem.text}
              onChange={this.handleChange}
            />
            <button type="submit">Add Task</button>
          </form>
          <h2>Tasks Todo</h2>
          <ListItems
            items={this.state.items}
            editItem={this.editItem}
            handleEditChange={this.handleEditChange}
            deleteItem={this.deleteItem}
            disabled={this.state.isDisabled}
          ></ListItems>
        </div>
      </div>
    );
  }
}

export default Todo;
