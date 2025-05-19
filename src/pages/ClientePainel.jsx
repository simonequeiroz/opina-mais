import { useEffect, useState } from 'react'

function ClientePainel() {
  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    const dadosSimulados = [
      { id: 1, tipo: 'Reclamação', mensagem: 'Demorou para entregar' },
      { id: 2, tipo: 'Sugestão', mensagem: 'Poderia ter mais opções de contato' },
    ]
    setFeedbacks(dadosSimulados)
  }, [])

  return (
    <main>
      <h2>Seus Feedbacks</h2>
      <ul>
        {feedbacks.map((item) => (
          <li key={item.id}><strong>{item.tipo}</strong>: {item.mensagem}</li>
        ))}
      </ul>
    </main>
  )
}

export default ClientePainel
