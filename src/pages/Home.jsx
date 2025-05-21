// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaHandshake, FaChartLine, FaUserPlus, FaBuilding } from 'react-icons/fa'; // Adicione ícones
import './Home.css'; // <<-- VERIFIQUE SE ESTA LINHA ESTÁ PRESENTE E CORRETA!

const Home = () => {
  return (
    <div className="home-container">
      {/* Seção 1: Banner de Boas-Vindas */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bem-vindo(a) ao Opina+!</h1>
          <p className="slogan">Sua voz importa. Conectando clientes e empresas para um futuro melhor.</p>
          <div className="cta-buttons">
            <Link to="/cadastro" className="btn-cta primary">
              <FaUserPlus /> Cadastre-se como Cliente
            </Link>
            <Link to="/cadastro-empresa" className="btn-cta secondary"> {/* <<-- Mude o caminho para a nova rota de empresa */} {/* Ou link para uma página "Para Empresas" */}
              <FaBuilding /> Cadastre minha Empresa
            </Link>
          </div>
        </div>
      </section>

      {/* Seção 2: Como Funciona / Nossos Benefícios */}
      <section className="benefits-section">
        <h2>Por que usar o Opina+?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaComments className="benefit-icon" />
            <h3>Sua Voz Amplificada</h3>
            <p>Envie seus feedbacks diretamente às empresas e seja ouvido.</p>
          </div>
          <div className="benefit-card">
            <FaHandshake className="benefit-icon" />
            <h3>Conecte-se com Marcas</h3>
            <p>Empresas dispostas a ouvir e melhorar seus serviços e produtos.</p>
          </div>
          <div className="benefit-card">
            <FaChartLine className="benefit-icon" />
            <h3>Melhoria Contínua</h3>
            <p>Ajude empresas a crescer e desfrute de experiências cada vez melhores.</p>
          </div>
        </div>
      </section>

       {/* Seção 3: Chamada para Ação OTIMIZADA */}
       <section className="cta-bottom-section">
        <div className="cta-card">
          <h3>É Cliente? Sua Opinião Vale muito!</h3>
          <p>Faça login para compartilhar suas experiências ou crie sua conta agora.</p>
          <div className="cta-card-buttons"> {/* Novo div para organizar botões */}
            <Link to="/login" className="btn-cta primary">
              <FaUserPlus /> Fazer Login
            </Link>
            <Link to="/cadastro" className="btn-cta secondary">
              <FaUserPlus /> Criar Conta Cliente
            </Link>
          </div>
        </div>
        <div className="cta-card">
          <h3>É Empresa? Conecte-se com Seus Clientes!</h3>
          <p>Cadastre sua empresa para receber e gerenciar feedbacks de forma eficiente.</p>
          <Link to="/cadastro-empresa" className="btn-cta primary"> {/* Botão primário para a ação principal */}
            <FaBuilding /> Cadastrar Minha Empresa
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;