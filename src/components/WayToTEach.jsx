import { ways } from "../data";

function Way({ title, description }) {
  return (
    <li>
      <strong>{title}</strong>
      {description}
    </li>
  );
}

function Ways() {
  return (
    <ul>
      {ways.map((way) => (
        <Way {...way} key={way.description}/>
      ))}
    </ul>
  );
}

export default Ways;
