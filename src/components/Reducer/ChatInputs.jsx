import style from "./style.module.css";
import Button from "../Button/Button";

export default function ChatInputs({ message, contact, dispatch }) {
  return (
    <div className={style.inputs}>
      <textarea
        value={message}
        placeholder={`message ${contact.email}`}
        onChange={(e) => {
          dispatch({
            type: "changed_message",
            id: contact.id,
            message: e.target.value,
          });
        }}
      ></textarea>
      <br />
      <Button
        onClick={() => {
          alert(`Sent to ${contact.email} message ${message}`);
          dispatch({ type: "sent_message", id: contact.id });
        }}
      >
        Sent to {contact.email}
      </Button>
    </div>
  );
}
