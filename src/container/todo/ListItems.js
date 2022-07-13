import React from 'react'

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(e => {
        return(
            <div className='list' key={e.key}>
                <input value={e.text} id={e.key} type="text" onChange={props.handleEditChange} disabled={props.isDisabled}/>
                <button onClick={props.editItem(e.key)}>Edit</button>
                <button onClick={() => props.deleteItem(e.key)}>Del</button>
            </div>
        )
    })
  return (
      <div>{listItems}</div>
  )
}

export default ListItems
