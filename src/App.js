import './App.css';
import {useState} from 'react';
import Modal from './Edit';
import TodoCard from './TodoCard';


function App() {
  const [show, setShow] = useState(false)
  const [todos, setTodos] = useState([])

  const onEdit = (e) => {
    setShow(true)
  }

  const addTodo = (title, detail) => {
    setTodos([...todos, {title: title, detail: detail}])
  }

  console.log(todos)

  return (
    <main>
      <Modal show={show} setShow={setShow} addTodo={addTodo} />
      {todos.map((v) =>
        <TodoCard title={v.title} detail={v.detail} />
      )}

      <button onClick={onEdit}>Add</button>
    </main>
  );
}

export default App;
