
import React, { useState } from 'react';
import { Qualificacao } from '../types/Qualificacao.ts';

const useQualificacao = () => {
    const [qualificacao, setQualificacao] = useState<Qualificacao>({
        id: 0,
        titulo: '',
        descricao: '',
        data: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setQualificacao({ ...qualificacao, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Qualificacao enviado:', qualificacao);
    };

    return {
        qualificacao,
        handleChange,
        handleSubmit,
    };
};

export default useQualificacao;