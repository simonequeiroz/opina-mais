import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
    // Aqui futuramente vamos chamar a API
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", paddingTop: "100px" }}>
      <h2>Login - Opina+</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        /><br /><br />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
