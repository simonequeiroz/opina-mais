import { useState } from 'react'
import './Cadastro.css'

function Cadastro() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  })
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [erros, setErros] = useState({})
  const [sucesso, setSucesso] = useState(false)

  const validar = () => {
    const novosErros = {}
    if (!form.nome.trim()) novosErros.nome = 'Nome é obrigatório.'
    if (!form.email.includes('@')) novosErros.email = 'E-mail inválido.'
    if (form.senha.length < 6) novosErros.senha = 'Senha precisa ter 6 ou mais caracteres.'
    setErros(novosErros)
    return Object.keys(novosErros).length === 0
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validar()) return

    // Exemplo de integração com backend usando fetch
    fetch('https://seu-backend.com/api/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => {
        console.log(data)
        setSucesso(true)
        setForm({ nome: '', email: '', senha: '' })
      })
      .catch(error => {
        console.error('Erro no cadastro:', error)
        setSucesso(false)
      })
  }

  return (
    <div className="cadastro-container">
      <h2>📝 Cadastro de Usuário</h2>

      {sucesso && <p className="sucesso">Cadastro realizado com sucesso! ✅</p>}

      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          className={erros.nome ? 'erro' : ''}
          placeholder="Digite seu nome"
        />
        {erros.nome && <span className="mensagem-erro">{erros.nome}</span>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={erros.email ? 'erro' : ''}
          placeholder="exemplo@email.com"
        />
        {erros.email && <span className="mensagem-erro">{erros.email}</span>}

        <label>Senha:</label>
        <div className="senha-container">
          <input
            type={mostrarSenha ? 'text' : 'password'}
            name="senha"
            value={form.senha}
            onChange={handleChange}
            className={erros.senha ? 'erro' : ''}
            placeholder="Mínimo 6 caracteres"
          />
          <button type="button" className="mostrar" onClick={() => setMostrarSenha(!mostrarSenha)}>
            {mostrarSenha ? '🙈' : '👁️'}
          </button>
        </div>
        {erros.senha && <span className="mensagem-erro">{erros.senha}</span>}

        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Cadastro
