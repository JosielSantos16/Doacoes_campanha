"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const criarCampanha = () => {
    router.push('/criar');
  }
  
  return (
    <div className="bg-white">
      <div className="">
        <div className="container mx-auto flex items-center justify-center p-10">
          <img src="/logo.jpeg" alt="logo" className="w-24 rounded-full" />
          <h1 className="text-5xl mx-7 text-green-500 font-extrabold">titulo</h1>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col p-24 mb-72 w-1/2">
          <h1 className="text-5xl font-extrabold text-green-500">Faça uma campanha, mude o mundo</h1>
          <p className="mt-5 text-xl">Crie uma campanha ou apoie causas que importam e veja como sua contribuição pode transformar vidas. Nossa plataforma permite que você crie campanhas significativas ou apoie iniciativas existentes. Juntos, podemos fazer a diferença.</p>
          <div className="mt-5">
            <button onClick={criarCampanha} className="bg-green-500 h-12 rounded-md text-white px-4">Criar campanha</button>
          </div>
        </div>
        <div>
          <img src="/imagem.png" alt="imagem" className="rounded-lg border border-gray-300 h-96 mb-60" />
        </div>
      </div>
    </div>
  );
}
