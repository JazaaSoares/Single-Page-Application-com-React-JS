import React from 'react';
import useProjeto from '../../hooks/useProjeto.ts';

const ComponenteProjeto = () => {
  
  const { projeto, handleChange, handleSubmit } = useProjeto();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        value={projeto.titulo}
        onChange={handleChange}
        placeholder="Título"
      />
      <input
        type="text"
        name="link"
        value={projeto.link}
        onChange={handleChange}
        placeholder="Link"
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ComponenteProjeto;