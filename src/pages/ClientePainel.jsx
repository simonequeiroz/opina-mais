import React from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa'; // Importe os ícones que você deseja usar

const Painel = () => {
  // Dados simulados
  const feedbacksRecebidos = [
    {
      id: 1,
      cliente: 'Maria da Silva',
      assunto: 'Entrega atrasada',
      mensagem: 'O pedido demorou muito!',
    },
    {
      id: 2,
      cliente: 'João Souza',
      assunto: 'Aplicativo com bug',
      mensagem: 'Não consigo enviar o formulário.',
    },
    {
        id: 3,
        cliente: 'Ana Oliveira',
        assunto: 'Sugestão de funcionalidade',
        mensagem: 'Seria ótimo ter um recurso de busca avançada.'
    },
    {
        id: 4,
        cliente: 'Pedro Costa',
        assunto: 'Atendimento excelente',
        mensagem: 'Fui muito bem atendido pela equipe de suporte!'
    },
  ];

  return (
    <div
      className="painel-admin"
      style={{
        padding: '30px',
        backgroundColor: '#f4f6f8', // Cor de fundo suave
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Sombra leve
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px', // Limita a largura máxima do painel
        margin: '30px auto', // Centraliza o painel na página
      }}
    >
      <h2 style={{ 
          color: '#333', 
          marginBottom: '20px', 
          borderBottom: '2px solid #ddd', 
          paddingBottom: '10px',
          textAlign: 'center' // Centraliza o título
      }}>
        Painel Administrativo
      </h2>
      <p style={{ color: '#555', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
        <FaCommentDots style={{ marginRight: '8px', color: '#007bff', fontSize: '20px' }} /> Lista de feedbacks recebidos:
      </p>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {feedbacksRecebidos.map((fb) => (
          <li
            key={fb.id}
            style={{
              marginBottom: '20px',
              padding: '15px',
              backgroundColor: '#fff',
              borderRadius: '6px',
              border: '1px solid #eee',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', // Sombra mais sutil para os itens
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <strong style={{ color: '#333', display: 'flex', alignItems: 'center' }}>
                    <FaUser style={{ marginRight: '8px', color: '#28a745', fontSize: '18px' }} /> Cliente:
                </strong>{' '}
                <span style={{ color: '#666', marginLeft: '5px' }}>{fb.cliente}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                <strong style={{ color: '#333', display: 'flex', alignItems: 'center' }}>
                    <FaEnvelope style={{ marginRight: '8px', color: '#dc3545', fontSize: '18px' }} /> Assunto:
                </strong>{' '}
                <span style={{ color: '#666', marginLeft: '5px' }}>{fb.assunto}</span>
            </div>
            <div style={{ marginTop: '10px' }}>
                <strong style={{ color: '#333' }}>Mensagem:</strong>{' '}
                <span style={{ color: '#666', fontStyle: 'italic' }}>{fb.mensagem}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Painel;