'use client';

import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import Card from '../Card/Card';
import { Product } from '../../models/interfaces';

// Hook para buscar dados da API
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Products = () => {
  // Estado para o texto da pesquisa
  const [search, setSearch] = useState('');

  // Estado para os produtos filtrados
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  // Busca dos produtos da API
  const { data, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);

  // Atualizar produtos filtrados quando `search` ou `data` mudar
  useEffect(() => {
    if (data) {
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [search, data]);

  if (error) return <div className="text-red-600 text-center">Erro ao carregar os produtos.</div>;

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100">
      {/* Input de Pesquisa */}
      <div className="mb-6 w-full max-w-lg">
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Produtos</h2>

      {/* Exibição dos Produtos */}
      {isLoading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-screen-xl">
          {filteredData.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category.name}
              imageUrl={product.image}
              rating={product.rating.rate}
              ratingCount={product.rating.count}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
