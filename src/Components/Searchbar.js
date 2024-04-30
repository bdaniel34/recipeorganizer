import { useState } from "react";
import React from "react";
export default function App() {
  const [first, setfirst] = useState("");
  const list = [
    {
      id: 2,
      name: "ctt",
      age: "tttttttt",
      macros: {
        klc: 6666,
      },
    },
    {
      id: 3,
      name: "chicken",
      age: "tttttttt",
      macros: {
        klc: 6666,
      },
    },
  ];
  return (
    <div className="App">
      <input
        type="text"
        value={first}
        onChange={(e) => setfirst(e.target.value)}
      ></input>

      <ul>
        {list
          .filter((item) => {
            if (first === "") {
              return first;
            } else if (item.name.toLowerCase().includes(first.toLowerCase()))
              return first;
          })
          .map((item) => {
            return (
              <li className="photo" key={item.id}>
                {item.name} {item.age} {item.macros.klc}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
