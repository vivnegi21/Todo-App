import React, { useState } from "react";
import ToDoList from "./TodoList";

const App= () =>{

    const [inputList,setInputList] = useState("");
    const [items,setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    };
    const listOfItems = ()=>{

        setItems((oldItems)=>{
            //use this to get added item at last in else part
            // return [...oldItems,inputList]; 
            if(inputList===""){
                alert("Add item ");
                return oldItems;
            }
            else return [inputList,...oldItems];
        })
        setInputList("");

    };


    function deleteItems(id){
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    }
    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add A item"  value={inputList}onChange={itemEvent}/>
                <button onClick={listOfItems}> + </button>

                <ol>
                    {items.map( (itemVal,index)=>{
                       return <ToDoList key={index} id={index} text={itemVal} onSelect={deleteItems}/>
                    })}
                </ol>
            </div>
        </div>
        </>
    );

};

export default App;