import React, { useState } from 'react';
import './FormularioFeedback.css'; // Vamos criar este CSS também
import { FaPaperPlane, FaImage, FaFileAlt, FaTimesCircle } from 'react-icons/fa'; // Ícones para o formulário

function FormularioFeedback() {
  const [form, setForm] = useState({
    titulo: '',
    mensagem: '',
    tipoFeedback: 'sugestao', // Ex: sugestão, problema, elogio
    anexos: [] // Para armazenar os arquivos a serem enviados
  });
  const [erros, setErros] = useState({});
  const [sucesso, setSucesso] = useState(false);
  const [enviando, setEnviando] = useState(false); // Estado para desabilitar o botão enquanto envia

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Limpa o erro ao digitar
    if (erros[name]) {
      setErros(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setForm(prevForm => ({
      ...prevForm,
      anexos: [...prevForm.anexos, ...files]
    }));
    // Limpa o erro se houver um erro de anexo
    if (erros.anexos) {
      setErros(prev => ({ ...prev, anexos: '' }));
    }
  };

  const handleRemoveFile = (fileNameToRemove) => {
    setForm(prevForm => ({
      ...prevForm,
      anexos: prevForm.anexos.filter(file => file.name !== fileNameToRemove)
    }));
  };

  const validar = () => {
    const novosErros = {};
    if (!form.titulo.trim()) {
      novosErros.titulo = 'O título é obrigatório.';
    } else if (form.titulo.trim().length < 5) {
      novosErros.titulo = 'O título deve ter no mínimo 5 caracteres.';
    }
    if (!form.mensagem.trim()) {
      novosErros.mensagem = 'A mensagem é obrigatória.';
    } else if (form.mensagem.trim().length < 10) {
      novosErros.mensagem = 'A mensagem deve ter no mínimo 10 caracteres.';
    }
    // Adicione validação para o número de anexos, tamanho, tipo, etc.
    // if (form.anexos.length > 5) novosErros.anexos = 'Máximo de 5 arquivos permitidos.';

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validar()) {
      setSucesso(false);
      return;
    }

    setEnviando(true);
    setSucesso(false);
    setErros({});

    // --- SIMULAÇÃO DE ENVIO DE FEEDBACK (REMOVER EM PRODUÇÃO!) ---
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simula delay de 2 segundos

      console.log('Dados do feedback para envio (simulado):', {
        ...form,
        anexos: form.anexos.map(file => ({ name: file.name, size: file.size, type: file.type })) // Apenas metadados dos arquivos
      });

      // Aqui você normalmente faria a requisição para o backend
      /*
      const formData = new FormData();
      formData.append('titulo', form.titulo);
      formData.append('mensagem', form.mensagem);
      formData.append('tipoFeedback', form.tipoFeedback);
      form.anexos.forEach((file, index) => {
        formData.append(`anexo${index}`, file); // Ou um array 'anexos[]' dependendo do backend
      });

      const response = await fetch('https://seu-backend.com/api/feedbacks', {
        method: 'POST',
        body: formData, // FormData não precisa de 'Content-Type' no header, o navegador configura automaticamente
        // headers: { 'Authorization': `Bearer ${tokenDoUsuario}` } // Se precisar de autenticação
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao enviar feedback.');
      }

      const result = await response.json();
      console.log('Feedback enviado com sucesso:', result);
      */

      setSucesso(true);
      setForm({ titulo: '', mensagem: '', tipoFeedback: 'sugestao', anexos: [] }); // Limpa o formulário
      
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      setErros({ geral: error.message || 'Ocorreu um erro ao enviar seu feedback. Tente novamente.' });
    } finally {
      setEnviando(false);
    }
    // --- FIM DA SIMULAÇÃO ---
  };

  return (
    <div className="formulario-feedback-container">
      <h2><FaPaperPlane /> Deixe seu Feedback</h2>
      <p className="subtitulo">Sua opinião é muito importante para nós e para as empresas.</p>

      {sucesso && <p className="mensagem sucesso">Feedback enviado com sucesso! Agradecemos sua contribuição. ✅</p>}
      {erros.geral && <p className="mensagem erro">{erros.geral} ❌</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título do Feedback:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Ex: Sugestão para o app, Problema na entrega"
            className={erros.titulo ? 'input-erro' : ''}
            disabled={enviando}
          />
          {erros.titulo && <span className="erro-texto">{erros.titulo}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Sua Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            placeholder="Descreva seu feedback aqui..."
            rows="6"
            className={erros.mensagem ? 'input-erro' : ''}
            disabled={enviando}
          ></textarea>
          {erros.mensagem && <span className="erro-texto">{erros.mensagem}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="tipoFeedback">Tipo de Feedback:</label>
          <select
            id="tipoFeedback"
            name="tipoFeedback"
            value={form.tipoFeedback}
            onChange={handleChange}
            className={erros.tipoFeedback ? 'input-erro' : ''}
            disabled={enviando}
          >
            <option value="sugestao">Sugestão</option>
            <option value="problema">Problema</option>
            <option value="elogio">Elogio</option>
            <option value="duvida">Dúvida</option>
            <option value="outros">Outros</option>
          </select>
          {erros.tipoFeedback && <span className="erro-texto">{erros.tipoFeedback}</span>}
        </div>

        <div className="form-group file-upload-group">
          <label htmlFor="anexos">Anexar Imagens ou Arquivos (Opcional):</label>
          <input
            type="file"
            id="anexos"
            name="anexos"
            multiple // Permite múltiplos arquivos
            onChange={handleFileChange}
            accept="image/*, application/pdf, .doc, .docx" // Tipos de arquivo aceitos
            className="input-file"
            disabled={enviando}
          />
          <p className="dica-arquivo">Formatos aceitos: Imagens (jpg, png), PDF, Word. Max 5 arquivos.</p>
          {erros.anexos && <span className="erro-texto">{erros.anexos}</span>}

          {form.anexos.length > 0 && (
            <div className="lista-anexos">
              <h4>Arquivos Selecionados:</h4>
              {form.anexos.map((file, index) => (
                <div key={file.name + index} className="anexo-item">
                  {file.type.startsWith('image/') ? <FaImage className="file-icon" /> : <FaFileAlt className="file-icon" />}
                  <span>{file.name} ({Math.round(file.size / 1024)} KB)</span>
                  <button type="button" className="remover-anexo-btn" onClick={() => handleRemoveFile(file.name)} disabled={enviando}>
                    <FaTimesCircle />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="btn-enviar" disabled={enviando}>
          {enviando ? 'Enviando...' : <><FaPaperPlane /> Enviar Feedback</>}
        </button>
      </form>
    </div>
  );
}

export default FormularioFeedback;