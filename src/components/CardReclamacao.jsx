// src/components/CardReclamacao.jsx
import React from 'react';
import './CardReclamacao.css';

function CardReclamacao({ reclamacao }) {
  return (
    <div className="card">
      <p><strong>Tipo:</strong> {reclamacao.tipo}</p>
      <p><strong>Descrição:</strong> {reclamacao.descricao}</p>
      <p className="data">{reclamacao.data}</p>
    </div>
  );
}

export default CardReclamacao;
