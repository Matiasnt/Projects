import React, {useState} from 'react'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {


  const [todos, setTodos] = useState([
    'Learn React',
    'Learn Firebase',
    'Build a project'
  ])

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }


  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos}/>

    </>
  )
}

export default App
