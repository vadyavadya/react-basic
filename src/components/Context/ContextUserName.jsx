import {useContext, useState} from "react";
import Button from "../Button/Button";
import {AuthContext} from "./MyContext";


export default function ContextUserName() {
  const [name,setName] = useState('');
  const {setUserName} = useContext(AuthContext);

  return (
    <div>
      <label htmlFor="name">Ведите имя</label>
      <input className="control" id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <Button onClick={()=>setUserName(name)}>Отправить</Button>
    </div>
  )
}