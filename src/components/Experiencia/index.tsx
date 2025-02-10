import React from 'react';
import useExperiencia from '../../hooks/useExperiencia.ts';

const ComponenteExperiencia = () => {
  
  const { experiencia, handleChange, handleSubmit } = useExperiencia();

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="titulo"
        value={experiencia.titulo}
        onChange={handleChange}
        placeholder="Título"
      />
      <input
        type="text"
        name="descricao"
        value={experiencia.descricao}
        onChange={handleChange}
        placeholder="Descrição"
      />
      <input
        type="date"
        name="data"
        value={experiencia.data}
        onChange={handleChange}
        placeholder="Data"
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ComponenteExperiencia;