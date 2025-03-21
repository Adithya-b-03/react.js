import React, { useState } from "react";
// import styled from "styled-components";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

// const Button = styled.button`
//   background-color: blue;
//   color: white;
//   width: 100px;
//   height: 50px;
//   border: none;
//   cursor: pointer;
//   font-size: 16px;
//   border-radius: 5px;
//   transition: 0.3s;
  
//   &:hover {
//     background-color: darkblue;
//   }
// `;

const Content = () => {
  let [items,setItems] = useState([
    {id:1,label:"html & css",checked:true},
    {id:2,label:"javascript",checked:true},
    {id:3,label:"react js",checked:false}
  ]);

  let [newItem,setNewItem] = useState("");

  let [isEditing,setIsEditing] = useState(false);

  let [currId,setCurrId] = useState(null);

  let handleChecked = (id)=>{
    let newListItems = items.map((item)=>{
      return item.id == id ? {...item,checked : !item.checked} : item;
    });
    setItems(newListItems);
  };
  let handleDelete = (id)=>{
    setItems(items.filter((item) => item.id !== id));
  }
  let handleAddOrUpdate = ()=>{
    if(isEditing){
      let newListItems = items.map((item)=>{return item.id === currId ? {...item,label:newItem}:item});
      setItems(newListItems);
      setCurrId(null);
      setNewItem("");
      setIsEditing(false);
    }
    else{
      setItems([...items,{id:items.length+1,label:newItem,checked:false}]);
      setNewItem("");
    }
  }
  let handleUpdate = (id)=>{
    let listItem = items.find(item=>item.id === id);
    setNewItem(listItem.label);
    setIsEditing(true);
    setCurrId(id);
  }
  return (
    <main>
      <div>
        <input 
          type = "text" 
          value = {newItem} 
          placeholder = "enter new item"
          onChange={(e)=>{setNewItem(e.target.value)}}
        />
        <button onClick={handleAddOrUpdate}>{isEditing?"Save":"Add"}</button>
      </div>
      <ul>
        {
          items.map((item)=>{
              return <li key = {item.id} className="item">
                        <input type = "checkbox" checked = {item.checked} onChange={()=>{handleChecked(item.id)}}/>
                        <label>{item.label} </label>
                        < FaEdit role = "button" tabIndex = {0} onClick = {()=>{handleUpdate(item.id)}}/>
                        < FaTrashCan role = "button" tabIndex={0} onClick= {()=>{handleDelete(item.id)}}/>
                    </li>
          })
        }
      </ul>
    </main>
  );
};

export default Content;
