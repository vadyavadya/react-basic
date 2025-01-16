import { useState } from "react";
import { differences } from "../data";
import Button from "./Button/Button";

function DifferencesSection() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type);
    // console.log(content) // ! контент еще старый он меняется только при следующем рендеринге
  }

  return (
    <section>
      <Button
        onClick={() => handleClick("way")}
        isActive={contentType === "way"}
      >
        Подход
      </Button>
      <Button
        onClick={() => handleClick("easy")}
        isActive={contentType === "easy"}
      >
        Доступность
      </Button>
      <Button
        onClick={() => handleClick("program")}
        isActive={contentType === "program"}
      >
        Концентрация
      </Button>
      {contentType ? (
        <p>{differences[contentType]}</p>
      ) : (
        <p>"Нажми не кнопку"</p>
      )}
    </section>
  );
}

export default DifferencesSection;
