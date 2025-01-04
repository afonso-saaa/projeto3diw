'use client';

import React, { useEffect, useState } from 'react';
import { Product } from '../../models/interfaces';

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (productId: string) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const buy = () => {
    fetch("/api/deisishop/buy", {
      method: "POST",
      body: JSON.stringify({
        products: cart.map((item) => item.id),
        name: "",
        student: false,
        coupon: "",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao comprar");
        }
        return response.json();
      })
      .then(() => {
        setCart([]); 
        localStorage.removeItem("cart"); 
        alert("Compra realizada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao comprar:", error);
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold mb-6">Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="w-full max-w-screen-md space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center p-4 bg-white shadow rounded">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-1">
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
          <button
            onClick={buy}
            className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Comprar
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
