import { useState } from 'react'

export default function FormularioReclamacao({ onNovaReclamacao }) {
  const [tipo, setTipo] = useState('reclamacao')
  const [descricao, setDescricao] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (descricao.trim() === '') {
      alert('Por favor, escreva a descrição.')
      return
    }
    onNovaReclamacao({ tipo, descricao, data: new Date().toLocaleDateString() })
    setDescricao('')
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label>
        Tipo:
        <select value={tipo} onChange={e => setTipo(e.target.value)} className="input">
          <option value="reclamacao">Reclamação</option>
          <option value="sugestao">Sugestão</option>
        </select>
      </label>

      <label>
        Descrição:
        <textarea
          value={descricao}
          onChange={e => setDescricao(e.target.value)}
          rows={4}
          placeholder="Digite aqui sua reclamação ou sugestão"
          className="input"
        />
      </label>

      <button type="submit" className="botao">Enviar</button>
    </form>
  )
}
