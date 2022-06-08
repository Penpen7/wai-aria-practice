import {useState} from 'react';
const Modal = ({show, setShow, addTodo}) => {
  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeDetail = (e) => {
    setDetail(e.target.value)
  }

  const onClickOK = (e) => {
    console.log(title, detail)
    addTodo(title, detail)
    setShow(false)
  }

  const onClickCancel = (e) => {
    setShow(false)
  }

  return (
    show ?
      <div>
        < h1 > Edit</h1 >
        <input type="text" value={title} onChange={onChangeTitle} />
        <input type="text" value={detail} onChange={onChangeDetail} />
        <button onClick={onClickOK}>OK</button>
        <button onClick={onClickCancel}>Cancel</button>
      </div > : null
  )
}

export default Modal
