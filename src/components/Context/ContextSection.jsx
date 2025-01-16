import {useState} from "react";
import MyContextComponent from "./MyContextComponent";
import ContextForm from "./ContextForm";
import style from './style.module.css'

export default function ContextSection() {
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState(null);
  let className = style.contextSection;

  if(theme === 'dark'){
    className += ' dark'
  }

  return (
    <section className={className}>
      <MyContextComponent themeState={{theme, setTheme}} userNameState={{userName, setUserName}} >
        <h1>Контекст</h1>
        <h2>Добро пожаловать {userName? userName: 'неизвестный'}</h2>
        <ContextForm/>
      </MyContextComponent>
    </section>
  );
}
