import { useRef, useState } from "react";
import Button from "./Button/Button";

// * отдельная задача по useRef отображение useRef
// 1 variant записываю в состояние содержание 
function StateVsRef() {
  const inputMy = useRef();
  const [showValue, setShowValue] = useState('');

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setShowValue(inputMy.current.value);
    }
  }

  return (
    <>
      {/* ! Будет ошибка */}
      {/* <h1>{inputMy.current.value}</h1> */}
      {/* Правильно */}
      <h1>{inputMy.current?.value}</h1>
      <label htmlFor="refer">Внутри: {showValue}</label>
      <input
        type="text"
        id="refer"
        className="control"
        ref={inputMy}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

// 2 variant отображаю содержание input обновляя версии
function StateVsRefTwo() {
  const inputMy = useRef();
  const [show, setShow] = useState(null);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setShow(prev => prev + 1);
    }
  }

  return (
    <>
      {/* ! Будет ошибка */}
      {/* <h1>{inputMy.current.value}</h1> */}
      {/* Правильно */}
      <h1>{inputMy.current?.value}</h1>
      <label htmlFor="refer">Внутри: {show && inputMy.current.value}</label>
      <input
        type="text"
        id="refer"
        className="control"
        ref={inputMy}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}

// * USESTATE
// * реализация через объект
function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    error: false,
    reason: "error",
  });

  function handleName(event) {
    setForm((prev) => ({ ...prev, name: event.target.value }));
  }

  function touchedName(event) {
    setForm((prev) => ({
      ...prev,
      error: event.target.value.trim().length === 0,
    }));
  }

  return (
    <section>
      <h3>Обратная связь</h3>
      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Напишите имя</label>
        <input
          className="control"
          type="text"
          id="name"
          value={form.name}
          onChange={handleName}
          onBlur={touchedName}
          style={{
            border: form.error ? "1px solid red" : null,
          }}
        />

        <label htmlFor="reason">Выберете</label>
        <select
          className="control"
          id="reason"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Помощь</option>
          <option value="suggestion">Предложение</option>
        </select>
        <pre> {JSON.stringify(form, null, 2)} </pre>

        <Button isActive={!form.error} disabled={form.error}>
          Отправить
        </Button>
      </form>
      <StateVsRef />
      <br />
      <StateVsRefTwo/>
    </section>
  );
}

// * реализация через много useState
// function FeedbackSection() {
//   const [name, setName] = useState("");
//   const [hasError, setHasError] = useState(false);
//   const [reason, setReason] = useState("error");

//   function handleName(event) {
//     setName(event.target.value);
//   }

//   function touchedName(event){
//     setHasError(event.target.value.trim().length === 0)
//   }

//   return (
//     <section>
//       <h3>Обратная связь</h3>
//       <form>
//         <label htmlFor="name">Напишите имя</label>
//         <input
//           className="control"
//           type="text"
//           id="name"
//           value={name}
//           onChange={handleName}
//           onBlur={touchedName}
//           style={{
//             border: hasError ? '1px solid red': null,
//           }}
//         />

//         <label htmlFor="reason">Выберете</label>
//         <select
//           className="control"
//           id="reason"
//           value={reason}
//           onChange={(event) => setReason(event.target.value)}

//         >
//           <option value="error">Ошибка</option>
//           <option value="help">Помощь</option>
//           <option value="suggestion">Предложение</option>
//         </select>
//         <pre>
//           Name: {name},
//           <br />
//           Reason: {reason}
//         </pre>

//         <Button isActive={!hasError} disabled={hasError}>Отправить</Button>
//       </form>
//     </section>
//   );
// }

export default FeedbackSection;
