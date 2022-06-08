import {useState} from 'react';

const TodoCard = ({title, detail}) => {
  const [isChecked, setChecked] = useState(false)
  const onChange = (e) => {
    setChecked(e.target.checked)
  }

  return (<div className="todo-card">
    <h1>{title}</h1>
    <input type="checkbox" id="scales" name="scales" checked={isChecked} onChange={onChange} />
    <p>{detail}</p>
    <button>Edit</button>
    <button>Delete</button>
  </div>
  )
}
export default TodoCard
