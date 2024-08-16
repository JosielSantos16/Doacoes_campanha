"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Criar = () => {

  const router = useRouter();

  const Sair = () => {
    router.push('/');
  }

  return (
    <div className='bg-white h-screen flex justify-center items-center'>
      <div className='mt border border-black p-32 rounded-3xl'>
        <h1 className='text-3xl text-green-500 font-extrabold'>Começando sua campanha</h1>
        <h2 className='mt-7 font-bold text-lg'>Nome da campanha :</h2>
        <input placeholder='Digite o nome de sua campanha' className='border-2 rounded-md border-green-500 p-2 w-96 mt-4'/>
        <h2 className='mt-4 font-bold text-lg'>Valor alvo a ser alcançado:</h2>
        <input placeholder='Digite sua meta de arrecadação' className='border-2 rounded-md border-green-500 p-2 w-96 mt-4'/>
        <h2 className='mt-4 font-bold text-lg'>Descrição:</h2>
        <textarea placeholder='Diga por que criou essa campanha ' className='border-2 rounded-md border-green-500 p-2 w-96 mt-4 h-32 resize-none' />
        <div className="mt-16 flex justify-between">
          <button onClick={Sair} className="bg-red-400 h-12 rounded-md text-white px-4">Sair da criação</button>
          <button className="bg-green-500 h-12 rounded-md text-white px-4">Criar campanha</button>
        </div>
      </div>
    </div>
  );
};

export default Criar;
