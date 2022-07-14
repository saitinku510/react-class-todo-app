import React, { Component } from "react";

class ListItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editValue : ""
    }
    const items = this.props.items;
  }

  render() {
    const listItems = this.props.items.map((e) => {
      return (
        <div className="list" key={e.key}>
          <input
            value={e.text}
            id={e.key}
            type="text"
            onChange={(event) => {
              this.setState({editValue : event.target.value});
            }}
          />
          <button onClick={() => {this.props.handleChangeText(e.key)}}>
            {this.props.editText}
          </button>
          <button onClick={(event) => {
              this.props.setUpdate(this.state.editValue, e.key);
            }}>
            Save
          </button>
          <button onClick={() => this.props.deleteItem(e.key)}>Del</button>
        </div>
      );
    });
    return <div>{listItems}</div>;
  }
}

export default ListItems;
