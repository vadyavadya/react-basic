import { useContext } from "react";
import { ThemeContext } from "./MyContext";
import ContextUserName from "./ContextUserName";

export default function ContextForm() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <label style={{ marginRight: "0.5rem" }}>Dark style</label>
      <input type="checkbox" checked={theme === 'dark'} onChange={(e) => setTheme(e.target.checked? 'dark':'light')}/>
      <ContextUserName/>
    </>
  );
}
