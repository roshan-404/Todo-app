
import { Button, TextField } from '@material-ui/core';
import { useState, useEffect } from 'react';
import './App.css';
import TodoListItem from  './Todo.js';
import { db } from './firebaseConfig';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, [])

  function getTodos(){
    db.collection("todos").onSnapshot(function (querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) =>({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress, 
        }))
      );
    })
  }

  function addTodo(e){
      e.preventDefault();

      db.collection("todos").add({
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      });

      setTodoInput(""); 
  }
  return( 
    <div className="App" 
    style={{  
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    }}>
      <div>
      <h1> Roshan's ToDo App </h1>
        <form>
        <TextField 
        id="standard-basic" 
        label="Write a ToDo" 
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        style={{ width: "90vw", maxWidth: "500px"}} 
        />
        <Button type="submit" variant="contained" onClick={addTodo} style={{display: "none"}}>Default</Button> 
        </form>

        <div style={{ width: "90vw", maxWidth: "500px", marginTop: "30px"}} >
        {todos.map((todo) => (
            <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
          ))
        }
        </div>

        
      </div>
    </div>   
  ) ;
}

export default App;
