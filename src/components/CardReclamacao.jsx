export default function CardReclamacao({ tipo, descricao, data }) {
  return (
    <div className="card-reclamacao">
      <div className={`tipo ${tipo}`}>
        {tipo === 'reclamacao' ? '📢 Reclamação' : '💡 Sugestão'}
      </div>
      <p className="descricao">{descricao}</p>
      <div className="data">📅 {data}</div>
    </div>
  )
}
