'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../models/interfaces';

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  // Carregar os produtos do carrinho a partir do localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Remover um item do carrinho
  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Carrinho</h1>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="w-full max-w-screen-md space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-white shadow rounded">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p>{item.price.toFixed(2)} €</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
