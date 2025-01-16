import {TasksProvider} from "./TaskContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function ContextReducer() {
  return (
    <section>
      <TasksProvider>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </section>
  );
}
