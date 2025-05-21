// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Ícones do React-Icons
import { FaUser, FaBuilding, FaPlusCircle, FaHome, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaCommentDots, FaChartBar } from 'react-icons/fa';

// Se o seu Header tiver um CSS próprio, ele seria importado assim:
// import './Header.css'; 

const Header = ({ userType, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout(); // Chama a função de logout passada via props
    navigate('/'); // Redireciona para a página inicial após o logout
  };

  return (
    <nav style={{ backgroundColor: '#003366', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      {/* Link para o logo/nome */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        {/* Usar a tag <img> para o logo */}
        <img
          src="/logo_opina_plus.png" // Caminho relativo à pasta `public`
          alt="Opina+ Logo"
          style={{ height: '40px', marginRight: '10px' }} // Ajuste o tamanho conforme necessário
        />
        {/* Você pode manter o texto "Opina+" se quiser, mas o logo já diz "Opina+" */}
        {/* <span style={{ color: 'white', fontSize: '1.5em', fontWeight: 'bold' }}>Opina+</span> */}
      </Link>
      <div>
        <Link to="/" style={linkStyle}><FaHome /> Início</Link>
        
        {!userType ? ( // Se não estiver logado
          <>
            <Link to="/login" style={linkStyle}><FaSignInAlt /> Login</Link>
            <Link to="/cadastro" style={linkStyle}><FaUserPlus /> Cadastro</Link>
          </>
        ) : ( // Se estiver logado
          <>
            {userType === 'cliente' && (
              <>
                <Link to="/novo-feedback" style={linkStyle}><FaPlusCircle /> Novo Feedback</Link>
                <Link to="/meus-feedbacks" style={linkStyle}><FaCommentDots /> Meus Feedbacks</Link>
              </>
            )}
            {userType === 'empresa' && (
              <Link to="/painel-empresa" style={linkStyle}><FaChartBar /> Painel da Empresa</Link>
            )}
            <button onClick={handleLogoutClick} style={buttonStyle}><FaSignOutAlt /> Sair</button>
          </>
        )}
      </div>
    </nav>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 15px',
  padding: '5px 0',
  transition: 'color 0.2s ease',
  display: 'inline-flex', // Para alinhar ícone e texto
  alignItems: 'center',
  gap: '5px' // Espaço entre ícone e texto
};

const buttonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  marginLeft: '15px',
  fontSize: '1em',
  transition: 'color 0.2s ease',
  display: 'inline-flex', // Para alinhar ícone e texto
  alignItems: 'center',
  gap: '5px' // Espaço entre ícone e texto
};

export default Header;