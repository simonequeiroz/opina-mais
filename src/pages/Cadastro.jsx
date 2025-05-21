import { useState } from 'react'
// Linha CORRIGIDA: Agora ele procura por 'Cadastro.css' no MESMO DIRETÓRIO
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

    // --- LÓGICA DE SIMULAÇÃO DE CADASTRO (PARA DESENVOLVIMENTO) ---
    // REMOVA OU SUBSTITUA POR CÓDIGO DO BACKEND QUANDO ESTIVER PRONTO!
    try {
      // Simula um atraso de rede
      setTimeout(() => {
        console.log('Cadastro simulado com sucesso para:', form);
        setSucesso(true);
        setErros({});
        setForm({ nome: '', email: '', senha: '' }); // Limpa o formulário
      }, 1000); // Simula 1 segundo de espera
    } catch (error) {
      console.error('Erro na simulação de cadastro:', error);
      setErros({ geral: 'Ocorreu um erro ao tentar cadastrar. Tente novamente.' });
      setSucesso(false);
    }
    // --- FIM DA LÓGICA DE SIMULAÇÃO ---

    /*
    // CÓDIGO ORIGINAL PARA INTEGRAR COM BACKEND (DESCOMENTAR QUANDO PRONTO)
    // fetch('https://seu-backend.com/api/cadastro', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // })
    //   .then(res => res.ok ? res.json() : Promise.reject(res))
    //   .then(data => {
    //     console.log(data)
    //     setSucesso(true)
    //     setErros({}) // Limpa erros de validação
    //     setForm({ nome: '', email: '', senha: '' })
    //   })
    //   .catch(error => {
    //     console.error('Erro no cadastro:', error)
    //     // Tentar ler a mensagem de erro do backend se disponível
    //     error.json().then(errData => {
    //         setErros({ geral: errData.message || 'Erro ao realizar cadastro.' });
    //     }).catch(() => {
    //         setErros({ geral: 'Erro ao realizar cadastro. Tente novamente.' });
    //     });
    //     setSucesso(false)
    //   })
    */
  }

  return (
    <div className="cadastro-container">
      <h2>📝 Cadastro de Usuário</h2>

      {sucesso && <p className="mensagem sucesso">Cadastro realizado com sucesso! ✅</p>}
      {erros.geral && <p className="mensagem erro">{erros.geral}</p>} {/* Mensagem de erro geral */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          className={erros.nome ? 'input-erro' : ''}
          placeholder="Digite seu nome"
        />
        {erros.nome && <span className="erro-texto">{erros.nome}</span>}

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={erros.email ? 'input-erro' : ''}
          placeholder="exemplo@email.com"
        />
        {erros.email && <span className="erro-texto">{erros.email}</span>}

        <label htmlFor="senha">Senha:</label>
        <div className="senha-container">
          <input
            id="senha"
            type={mostrarSenha ? 'text' : 'password'}
            name="senha"
            value={form.senha}
            onChange={handleChange}
            className={erros.senha ? 'input-erro' : ''}
            placeholder="Mínimo 6 caracteres"
          />
          <button type="button" className="mostrar-senha-btn" onClick={() => setMostrarSenha(!mostrarSenha)}>
            {mostrarSenha ? '🙈' : '👁️'}
          </button>
        </div>
        {erros.senha && <span className="erro-texto">{erros.senha}</span>}

        <button type="submit" className="btn-cadastrar">Cadastrar</button> {/* Renomeei a classe para especificidade */}
      </form>
    </div>
  )
}

export default Cadastro