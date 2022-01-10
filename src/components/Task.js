import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Modal from './Modal'
function Task({task, onDelete, onToggle}) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log('eije ami');
    setShow(false);
  }
  const handleShow = () => setShow(true);
    return (
      <div className={`task ${task.reminder? 'reminder' : ''}`} onDoubleClick={ () => {onToggle(task.id)}} onClick={handleShow} >
          <h3> {task.text} <FaTimes style={{color:'red', cursor:'pointer'}} 
          onClick={() => {onDelete(task.id)}} /></h3>
          <p> {task.date}</p>

        {
          show && <Modal show={show} onHide={handleClose}/>
        }
      </div>
    );
  }

export default Task;