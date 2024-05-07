import { useEffect, useState } from "react";
import "./StarWars.css";

export default function StarWars(props) {
  const [characters, setCharacters] = useState([]);
  console.log(characters);
  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Star Wars World!</h1>
      <ul>
        {characters.map((x) => (
          <li key={x.url}>
            Name: {x.name}
            <br />
            Eye Color: {x.eye_color}
          </li>
        ))}
      </ul>
    </div>
  );
}
