// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import FormularioReclamacao from '../components/FormularioReclamacao';
import CardReclamacao from '../components/CardReclamacao';
import './Dashboard.css';

function Dashboard() {
  const [reclamacoes, setReclamacoes] = useState([]);

  const adicionarReclamacao = (nova) => {
    setReclamacoes([nova, ...reclamacoes]);
  };

  return (
    <div className="dashboard">
      <div className="form-area">
        <FormularioReclamacao onAdd={adicionarReclamacao} />
      </div>
      <div className="lista-area">
        <h2>Reclamações Recentes</h2>
        {reclamacoes.length === 0 ? (
          <p>Nenhuma reclamação ainda.</p>
        ) : (
          reclamacoes.map((r, i) => <CardReclamacao key={i} reclamacao={r} />)
        )}
      </div>
    </div>
  );
}

export default Dashboard;
