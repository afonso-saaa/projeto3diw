'use client';

import React from 'react';

interface CardProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  rating: number;
  ratingCount: number;
  onBuy: () => void; // Nova prop para lidar com a ação de compra
}

const Card: React.FC<CardProps> = ({
  title,
  price,
  description,
  category,
  imageUrl,
  rating,
  ratingCount,
  onBuy,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white flex flex-col items-center text-center p-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <p className="text-sm text-gray-500 mt-2">
        <span className="font-medium">Categoria:</span> {category}
      </p>
      <p className="text-sm text-yellow-500 mt-2">
        <span className="font-medium">Avaliação:</span> {rating} ⭐ ({ratingCount} avaliações)
      </p>
      <div className="mt-4">
        <p className="text-lg font-bold text-gray-900 mb-2">{price.toFixed(2)} €</p>
        <button
          onClick={onBuy} // Chama a função passada por prop
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Card;
