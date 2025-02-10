
import React, { useState } from 'react';
import { Experiencia } from '../types/Experiencia.ts';

const useExperiencia = () => {
    const [experiencia, setExperiencia] = useState<Experiencia>({
        id: 0,
        titulo: '',
        descricao: '',
        data: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setExperiencia({ ...experiencia, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Experiencia enviado:', experiencia);
    };

    return {
        experiencia,
        handleChange,
        handleSubmit,
    };
};

export default useExperiencia;