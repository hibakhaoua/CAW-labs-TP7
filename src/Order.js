import React from 'react';
import './Order.css';  // Import du fichier CSS

function Order({ cart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const goBack = () => {
    window.history.back(); // Permet de revenir à la page précédente
  };

  return (
    <div className="order">
      <h3>Résumé de votre commande</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <p>Merci pour votre commande!</p>
    </div>
  );
}

export default Order;
