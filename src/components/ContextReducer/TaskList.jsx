import { useState } from "react";
import { useTaskContext, useDispatchContext } from "./TaskContext";
import Button from "../Button/Button";

export default function TaskList() {
  const tasks = useTaskContext();

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
}

function Task({ task }) {
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatchContext();

  function editTask() {
    setIsEdit((p) => !p);
  }

  function saveTask() {
    setIsEdit(false);
  }

  return (
    <>
      <input
        type="checkbox"
        style={{ marginRight: "1rem" }}
        checked={task.done}
        onChange={(e) =>
          dispatch({
            type: "edit_task",
            task: { ...task, done: e.target.checked },
          })
        }
      />
      {isEdit ? (
        <>
          <input
            className="input"
            type="text"
            value={task.text}
            onChange={(e) =>
              dispatch({
                type: "edit_task",
                task: { ...task, text: e.target.value },
              })
            }
          />
          <Button style={{ marginLeft: "1rem" }} onClick={()=>setIsEdit(false)}>
            Save
          </Button>
        </>
      ) : (
        <>
          {task.text}
          <Button
            style={{ marginLeft: "1rem" }}
            onClick={() => setIsEdit(true)}
          >
            Edit
          </Button>
        </>
      )}
      <Button
        style={{ marginLeft: "1rem" }}
        onClick={() => dispatch({ type: "delete_task", task: { ...task } })}
      >
        Delete
      </Button>
    </>
  );
}
