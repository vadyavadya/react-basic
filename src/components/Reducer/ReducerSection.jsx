import { useReducer } from "react";
import style from "./style.module.css";
import { initialState, contacts, messengerReducer } from "./messengerReducer";
import ChatButtons from "./ChatButtons";
import ChatInputs from "./ChatInputs";

export default function ReducerSection() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  return (
    <section>
      <div className={style.chat}>
        <ChatButtons
          contacts={contacts}
          selectedId={state.selectedId}
          dispatch={dispatch}
        />

        <ChatInputs
          message={state.message[state.selectedId]}
          contact={contacts.find((c) => c.id === state.selectedId)}
          dispatch={dispatch}
        />
      </div>
    </section>
  );
}
