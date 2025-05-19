import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <header>
        <p>Plataforma moderna de Reclamações e Sugestões</p>
      </header>

      <div className="container">
        <img
          src="https://cdn.pixabay.com/photo/2018/01/19/07/35/customer-3090837_1280.jpg"
          alt="Imagem de atendimento ao cliente"
          className="image-banner"
        />

        <div className="features">
          <div className="feature">
            <i className="fas fa-edit"></i>
            <h2>Envio de Reclamações/Sugestões</h2>
            <p>Fácil preenchimento, com anexos, categorias e descrição do problema.</p>
          </div>

          <div className="feature">
            <i className="fas fa-tasks"></i>
            <h2>Status em tempo real</h2>
            <p>Acompanhe o que está acontecendo: pendente, em análise ou resolvido.</p>
          </div>

          <div className="feature">
            <i className="fas fa-bell"></i>
            <h2>Notificações por e-mail</h2>
            <p>Você será informado sobre qualquer atualização no seu feedback.</p>
          </div>
        </div>

        <div className="cta-buttons">
          <Link to="/cadastro" className="btn">Cadastre-se</Link>
          <Link to="/login" className="btn">Já tenho conta</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
