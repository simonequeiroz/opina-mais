import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CardReclamacao from './components/CardReclamacao'
import FormularioReclamacao from './components/FormularioReclamacao'


function App() {
  const [reclamacoes, setReclamacoes] = useState([])

  function adicionarReclamacao(nova) {
    setReclamacoes([nova, ...reclamacoes]) // adiciona no começo da lista
  }

  return (
    <div className="container">
      <Header />
      <h1>Opina+ - Reclamações e Sugestões</h1>
      <FormularioReclamacao onNovaReclamacao={adicionarReclamacao} />
      {reclamacoes.length === 0 ? (
        <p className="no-reclamacoes">Nenhuma reclamação ou sugestão ainda.</p>
      ) : (
        reclamacoes.map((item, index) => (
          <CardReclamacao
            key={index}
            tipo={item.tipo}
            descricao={item.descricao}
            data={item.data}
          />
        ))
      )}
      <Footer />
    </div>
  )
}

export default App
