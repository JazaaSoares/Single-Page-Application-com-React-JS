
import React from 'react';
import useContato from '../../hooks/useContato.ts';

const ComponenteContato = () => {
  const { contato, handleChange, handleSubmit } = useContato();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        value={contato.titulo}
        onChange={handleChange}
        placeholder="Título"
      />
      <input
        type="text"
        name="descricao"
        value={contato.descricao}
        onChange={handleChange}
        placeholder="Descrição"
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ComponenteContato;