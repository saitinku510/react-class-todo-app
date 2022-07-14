import React, { Component } from 'react'

class ListItems extends Component {
    constructor(props) {
      super(props)
    
      const items = this.props.items;
    }
    
  render() {
    const listItems = this.props.items.map(e => {
        return(
            <div className='list' key={e.key}>
                <input value={e.text} id={e.key} type="text" onChange={(event) => {this.props.setUpdate(event.target.value, e.key)}}/>
                {/* <button onClick={(event) => {this.props.setUpdate(event.target.value, e.key)}}>Edit</button> */}
                <button onClick={() => this.props.deleteItem(e.key)}>Del</button>
            </div>
        )
    })
    return (
        <div>{listItems}</div>
    )
  }
}

export default ListItems

