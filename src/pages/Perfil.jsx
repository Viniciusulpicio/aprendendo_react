// Perfil.js
import React, { useState } from "react";
import Menu from "./Menu";
import "./style.css";

function Perfil() {
  const [perfil, setPerfil] = useState({
    nome: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPerfil((prevPerfil) => ({
      ...prevPerfil,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para lidar com o envio dos dados, pode ser adicionada aqui
  };

  return (
    <div className="ProfileContainer">
      <h1>Perfil</h1>
      <Menu />

      <div className="ProfileFormContainer">
        <form className="ProfileForm" onSubmit={handleSubmit}>
          <div className="InputField">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={perfil.nome}
              onChange={handleChange}
            />
          </div>

          <div className="InputField">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={perfil.email}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="SubmitButton">
            Enviar
          </button>
        </form>
      </div>

      <div className="ProfileInfoContainer">
        <h2>Informações do Perfil</h2>
        <p>Nome: {perfil.nome}</p>
        <p>Email: {perfil.email}</p>
      </div>
    </div>
  );
}

export default Perfil;
