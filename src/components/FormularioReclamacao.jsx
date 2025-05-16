import React, { useState } from 'react';
import './FormularioReclamacao.css';

const FormularioReclamacao = () => {
  const [tipo, setTipo] = useState('Reclamação');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoverImagem = () => {
    setImagem(null);
    setPreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('tipo', tipo);
    formData.append('descricao', descricao);
    if (imagem) {
      formData.append('imagem', imagem);
    }

    console.log('Enviando:', {
      tipo,
      descricao,
      imagem
    });

    // Aqui você pode enviar para o backend com fetch
    // fetch('/api/reclamacoes', { method: 'POST', body: formData })

    alert('Enviado!');
    setDescricao('');
    handleRemoverImagem();
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label>Tipo:</label>
      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option>Reclamação</option>
        <option>Sugestão</option>
      </select>

      <label>Descrição:</label>
      <textarea
        rows="4"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        placeholder="Digite aqui sua reclamação ou sugestão"
      />

      <label>Imagem (opcional):</label>
      <input type="file" accept="image/*" onChange={handleImagemChange} />

      {preview && (
        <>
          <img src={preview} alt="Preview" className="imagem-preview" />
          <button type="button" onClick={handleRemoverImagem} className="btn-remover">
            Remover imagem
          </button>
        </>
      )}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioReclamacao;
