import style from "./style.module.css";
import Button from "../Button/Button";

export default function ChatButtons({ contacts, selectedId, dispatch }) {
  return (
    <ul className={style.buttons}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Button
              isActive={selectedId === contact.id}
              onClick={() =>
                dispatch({ type: "changed_selection", id: contact.id })
              }
            >
              {contact.name}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
