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
      editText: "Edit",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
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

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  };

  handleChangeText = (e) => {
    const textE = e.target.innerText;
    if (textE === "Edit") {
      this.setState({
        editText: "Save",
      }
      )
    }else{
      this.setState({
        editText: "Edit",
      })
    }
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
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
            handleChangeText={this.handleChangeText}
            editText={this.state.editText}
          ></ListItems>
        </div>
      </div>
    );
  }
}

export default Todo;
