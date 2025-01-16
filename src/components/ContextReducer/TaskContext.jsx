import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext(null);
const DispatchContext = createContext(null);

function useTaskContext() {
  return useContext(TaskContext);
}

function useDispatchContext() {
  return useContext(DispatchContext);
}

let nextId = 3;

function reducerTask(state, action) {
  switch (action.type) {
    case "add_task": {
      return [...state, { id: nextId++, text: action.text, done: false }];
    }
    case "edit_task": {
      return state.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "delete_task": {
      return state.filter((task) => task.id !== action.task.id);
    }
    default: {
      throw Error(`No type ${action.type}`);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];

function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(reducerTask, initialTasks);

  return (
    <TaskContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export { TasksProvider, useTaskContext, useDispatchContext };
