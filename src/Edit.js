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
    addTodo(title, detail)
    setShow(false)
  }

  const onClickCancel = (e) => {
    setShow(false)
  }

  const onKeyPress = (e) => {
    console.log(e.keyCode)
    if (e.keyCode === 27) {
      setShow(false)
    }
  }

  return (
    show ?
      <div id="overlay" onKeyPress={onKeyPress}>
        <div role="dialog"
          aria-labelledby="dialog_label"
          aria-modal
        >
          <div id="content">
            <h1 id="dialog_label">Add</h1>
            <div className="dialog_form_item">
              <label>
                <span className="label_text">Title</span>
                <input type="text" value={title} onChange={onChangeTitle} className="input_text" />
              </label>
            </div>
            <div className="dialog_form_item">
              <labal>
                <span className="label_text">detail</span>
                <input type="text" value={detail} onChange={onChangeDetail} className="input_text" />
              </labal>
            </div>
            <div className="dialog_form_actions">
              <button onClick={onClickOK}>OK</button>
              <button onClick={onClickCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      : null
  )
}

export default Modal
