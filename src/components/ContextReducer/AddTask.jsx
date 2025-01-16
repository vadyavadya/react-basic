import { useState } from "react";
import { useDispatchContext } from "./TaskContext";
import Button from "../Button/Button";

export default function AddTask() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatchContext();

  function addTasks() {
    dispatch({ type: "add_task", text: message });
    setMessage("");
  }

  return (
    <>
      <input
        type="text"
        className="input"
        style={{ marginRight: "1rem" }}
        placeholder="New task"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={addTasks}>add</Button>
    </>
  );
}
