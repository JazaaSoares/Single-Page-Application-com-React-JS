
import React, { useState } from 'react';
import { Contato } from '../types/Contato.ts';

const useContato = () => {
    const [contato, setContato] = useState<Contato>({
        id: 0,
        titulo: '',
        descricao: '',
        data: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContato({ ...contato, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Contato enviado:', contato);
    };

    return {
        contato,
        handleChange,
        handleSubmit,
    };
};

export default useContato;