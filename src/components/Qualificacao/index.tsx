import React from 'react';
import useQualificacao from '../../hooks/useQualificacao.ts';

const ComponenteQualificacao = () => {
  
  const { qualificacao, handleChange, handleSubmit } = useQualificacao();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        value={qualificacao.titulo}
        onChange={handleChange}
        placeholder="Título"
      />
      <input
        type="text"
        name="descricao"
        value={qualificacao.descricao}
        onChange={handleChange}
        placeholder="Descrição"
      />
      <input
        type="date"
        name="data"
        value={qualificacao.data}
        onChange={handleChange}
        placeholder="Data"
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ComponenteQualificacao;