import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ background: '#003366', padding: '10px', color: 'white' }}>
      <h1>📢 Opina+</h1>
      <nav>
        <Link to="/" style={{ color: 'white', margin: '0 10px' }}>Início</Link>
        <Link to="/login" style={{ color: 'white', margin: '0 10px' }}>Login</Link>
        <Link to="/cadastro" style={{ color: 'white', margin: '0 10px' }}>Cadastro</Link>
        <Link to="/cliente" style={{ color: 'white', margin: '0 10px' }}>Painel Cliente</Link>
        <Link to="/dashboard" style={{ color: 'white', margin: '0 10px' }}>Dashboard</Link>
      </nav>
    </header>
  )
}

export default Header
