import { useRef } from "react";
import InputComponent from "./InputComponent";
import CatFriends from "./CatFriends";


export default function RefForDOM() {
  return (
    <section>
      <RefFocus />
      <br />
      <RefFocusInComponent />
      <br />
      <CatFriends/>
    </section>
  );
}

// * Фокус на элемент дом
function RefFocus() {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}

// * Фокус на компонент требуется использовать forwardRef(function component(props, ref))
function RefFocusInComponent() {
  const inputRef = useRef(null);

  return (
    <>
      <InputComponent ref={inputRef} />
      <ButtonComponent onClick={() => inputRef.current.focus()} />
    </>
  );
}

function ButtonComponent({ onClick }) {
  return <button onClick={onClick}>Focus</button>;
}


