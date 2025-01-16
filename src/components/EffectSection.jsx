import { useEffect, useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useInput } from "../hooks/useInput";

function EffectSection() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  let input = useInput();

  useEffect(() => {
    async function getUsers() {
      setLoading(true);
      let users = await fetch("https://jsonplaceholder.typicode.com/users");
      users = await users.json();
      setUsers(users);
      setLoading(false);
    }
    getUsers();
  }, []);

  return (
    <section>
      <h2>Effect</h2>

      <Button onClick={() => setShow(true)} style={{ marginBottom: "1rem" }}>
        Открыть модалку
      </Button>

      <Modal show={show}>
        <h1>Информация</h1>
        <p>
          Aute esse minim ullamco reprehenderit excepteur pariatur voluptate
          nostrud excepteur officia.
        </p>
        <Button onClick={() => setShow(false)}>Закрыть</Button>
      </Modal>

      <input type="text" {...input} className="control" />
      {loading && "Loading .."}
      {!loading && (
        <ul>
          {users
            ?.filter((user) =>
              user.name.toLowerCase().includes(input.value.toLowerCase())
            )
            .map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
        </ul>
      )}
    </section>
  );
}

export default EffectSection;
