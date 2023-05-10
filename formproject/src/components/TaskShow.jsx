import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TaskContext from "../context/task";


function TaskShow({ task}) {
  const {editTaskById,deleteTaskById} = useContext(TaskContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
  deleteTaskById(task.id)
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit =(id,updatedTitle,updatedTaskDesc) =>{
    setShowEdit(false);

    editTaskById(id,updatedTitle,updatedTaskDesc)
  }

  console.log(task);

  return (
    <div className="task-show">
      {showEdit ? (
       <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button onClick={handleDeleteClick} className="btnsil">
              Sil
            </button>
            <button className="btnguncel" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
