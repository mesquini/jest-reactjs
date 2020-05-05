import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTech } from "~/store/modules/techs/action";

export default function TechList() {
  const [newTech, setNewTech] = useState("");

  const dispath = useDispatch();
  const techs = useSelector((state) => state.techs);

  function handleSubmit() {
    dispath(addTech(newTech));

    setNewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleSubmit}>
      <ul data-testid="tech-list">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />

      <button onClick={handleSubmit}>Adicionar</button>
    </form>
  );
}
