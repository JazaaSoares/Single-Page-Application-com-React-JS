
import React, { useState } from 'react';
import { Projeto } from '../types/Projeto.ts';

const useProjeto = () => {
    const [projeto, setProjeto] = useState<Projeto>({
        id: 0,
        titulo: '',
        descricao: '',
        data: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProjeto({ ...projeto, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Projeto enviado:', projeto);
    };

    return {
        projeto,
        handleChange,
        handleSubmit,
    };
};

export default useProjeto;