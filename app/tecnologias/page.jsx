'use client';

import React from 'react';
import tecnologias from '@/app/data/tecnologias.json';

const TecnologiasPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Tecnologias Aprendidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {JSON.parse(JSON.stringify(tecnologias)).map((tecnologia) => (
            <div
              key={tecnologia.title}
              className="max-w-xs rounded-lg overflow-hidden shadow-md bg-gray-50 p-4"
            >
              <Image
                src={tecnologia.image}
                alt={tecnologia.title}
                className="imagem-card"
              />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                {tecnologia.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{tecnologia.description}</p>
              <p className="text-sm text-yellow-500 mt-2">
                <strong>Avaliação:</strong> {tecnologia.rating.rate} ⭐ ({tecnologia.rating.count} avaliações)
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TecnologiasPage;
