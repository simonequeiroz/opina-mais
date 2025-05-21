import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Importações dos seus componentes de página
import Login from './pages/Login';
import PainelCliente from './pages/ClientePainel';
import DashboardEmpresa from './pages/Dashboard';
import Header from './components/Header';
import Cadastro from './pages/Cadastro'; // Cadastro de Cliente
import FormularioFeedback from './pages/FormularioFeedback';
import CadastroEmpresa from './pages/CadastroEmpresa'; // <<-- NOVO COMPONENTE CADASTRO EMPRESA

// IMPORTAÇÃO CORRETA DA HOME PAGE COM O CONTEÚDO RICO
import Home from './pages/Home'; // <-- Caminho correto para Home.jsx

// --- COMPONENTE AUXILIAR PARA VERIFICAÇÃO DE USUÁRIO (OPÇÃO 2) ---
// Este componente verifica se o usuário é 'cliente' antes de renderizar as rotas protegidas
const VerificarCliente = ({ userType, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userType || userType !== 'cliente') {
      navigate('/login'); // Redireciona para a página de login se não for cliente
    }
  }, [userType, navigate]);

  return userType === 'cliente' ? children : null; // Renderiza os filhos apenas se for cliente
};
// --- FIM DO COMPONENTE AUXILIAR ---


function App() {
  const [userType, setUserType] = useState(localStorage.getItem('userType'));

  const handleLoginSuccess = (type) => {
    setUserType(type);
    localStorage.setItem('userType', type);
    // Lógica de redirecionamento para o PainelCliente ou DashboardEmpresa após login
    if (type === 'cliente') {
      // navigate('/meus-feedbacks'); // Se você quiser redirecionar aqui
    } else if (type === 'empresa') {
      // navigate('/painel-empresa'); // Se você quiser redirecionar aqui
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userType');
    setUserType(null);
    // O Header já deve redirecionar para a Home ou Login após o logout
  };

  return (
    <Router>
      <Header userType={userType} onLogout={handleLogout} />

      <Routes>
        {/* ROTA PRINCIPAL: AGORA USANDO O SEU COMPONENTE HOME COMPLETO */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/cadastro" element={<Cadastro />} /> {/* Cadastro de Cliente */}
        <Route path="/cadastro-empresa" element={<CadastroEmpresa />} /> {/* Cadastro de Empresa */}

        {/* ROTAS PROTEGIDAS PARA CLIENTES: Usam o VerificarCliente */}
        <Route
          path="/novo-feedback"
          element={
            <VerificarCliente userType={userType}>
              <FormularioFeedback />
            </VerificarCliente>
          }
        />
        <Route
          path="/meus-feedbacks"
          element={
            <VerificarCliente userType={userType}>
              <PainelCliente />
            </VerificarCliente>
          }
        />

        {/* ROTA PROTEGIDA PARA EMPRESAS (mantida assim por simplicidade aqui) */}
        {userType === 'empresa' && (
          <Route path="/painel-empresa" element={<DashboardEmpresa />} />
        )}

        {/* Rota para páginas não encontradas (404) */}
        <Route path="*" element={
          <div style={{ padding: '50px', textAlign: 'center', fontSize: '1.5em', color: '#dc3545' }}>
            <h2>404 - Página Não Encontrada</h2>
            <p>A URL que você tentou acessar não existe.</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;