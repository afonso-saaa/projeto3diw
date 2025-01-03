'use client';

import React from 'react';
import tecnologias from '@/app/data/tecnologias.json';

const TecnologiasPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Tecnologias Aprendidas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">
        {JSON.parse(JSON.stringify(tecnologias)).map((tecnologia) => (
          <div
            key={tecnologia.title}
            className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white p-4"
          >
            <img
              src={tecnologia.image}
              alt={tecnologia.title}
              className="w-full h-48 object-cover"
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
    </main>
  );
};

export default TecnologiasPage;
