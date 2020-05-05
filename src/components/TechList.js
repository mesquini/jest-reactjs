import React, { useEffect, useState } from "react";

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState("");

  useEffect(() => {
    const techsLocal = localStorage.getItem("techs");

    if (techsLocal) setTechs(JSON.parse(techsLocal));
  }, []);

  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
  }, [techs]);

  function handleSubmit() {
    setTechs([...techs, newTech]);
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
        type="text"
        name="tech"
        id="tech"
        value={newTech}
        onChange={(e) => setNewTech(e.target.value)}
      />

      <button onClick={handleSubmit}>Adicionar</button>
    </form>
  );
}
