import React from "react";
import "./styles.css";

const Header = () => {
  return (
    <header className="appHeader">
      <div className="title">
        <h1>Instituto Madre Tereza</h1>
        <h2>Um novo conceito em gestão de saúde</h2>
      </div>
      <div className="summary">
        <nav>
          <ul>
            <li>
              <a href="#info">Quem somos</a>
            </li>
            <li>
              <a href="#action-section">Nossas ações</a>
            </li>
            <li>
              <a href="#local-section">Onde estamos</a>
            </li>
            <li>
              <a href="#team-section">Equipe</a>
            </li>
            <li>
              <a href="#operation-section">Locais de prestação</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
