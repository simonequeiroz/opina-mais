// src/pages/CadastroEmpresa.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroEmpresa.css'; // Corrected path

const CadastroEmpresa = () => {
  const [nomeEmpresa, setNomeEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  // Adicione mais estados para outros campos específicos da empresa (razão social, telefone, etc.)

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você enviaria os dados da empresa para o seu backend
    console.log('Dados da Empresa para Cadastro:', { nomeEmpresa, cnpj, email, senha });

    // Exemplo de lógica (substitua pela sua lógica de backend):
    // Se o cadastro for bem-sucedido:
    alert('Empresa cadastrada com sucesso! Agora você pode fazer login.');
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <div className="cadastro-empresa-container">
      <h2>Cadastro de Empresa</h2>
      <form onSubmit={handleSubmit} className="cadastro-empresa-form">
        <div className="form-group">
          <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
          <input
            type="text"
            id="nomeEmpresa"
            value={nomeEmpresa}
            onChange={(e) => setNomeEmpresa(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cnpj">CNPJ:</label>
          <input
            type="text" // Ou 'number' se você for validar como número
            id="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            required
            pattern="\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}" // Exemplo de pattern para CNPJ (ajuste se precisar)
            title="Formato CNPJ: 00.000.000/0000-00 ou 00000000000000"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailEmpresa">Email da Empresa:</label>
          <input
            type="email"
            id="emailEmpresa"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senhaEmpresa">Senha:</label>
          <input
            type="password"
            id="senhaEmpresa"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        {/* Adicione mais campos aqui, como Razão Social, Telefone de Contato, Endereço, etc. */}
        
        <button type="submit" className="btn-submit">Cadastrar Empresa</button>
      </form>
      <p>Já tem uma conta? <Link to="/login">Faça Login</Link></p>
    </div>
  );
};

export default CadastroEmpresa;