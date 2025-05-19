import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mostrarSenha, setMostrarSenha] = useState(false)
  const navigate = useNavigate()

  function validarEmail(email) {
    // Regex simples para validar formato de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!validarEmail(email)) {
      alert('Formato de e-mail inválido!')
      return
    }

    if (senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    // Simulação de login
    if (email === 'cliente@teste.com' && senha === '123456') {
      alert('Login bem-sucedido!')
      navigate('/cliente')
    } else {
      alert('E-mail ou senha inválidos.')
    }
  }

  return (
    <div className="form-container">
      <h2>Entrar no Opina+</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
