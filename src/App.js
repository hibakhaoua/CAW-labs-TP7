import React, { useState } from 'react';
import MenuDisplay from './MenuDisplay';
import Cart from './Cart';
import Order from './Order';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Fonction pour supprimer un item du panier
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Bienvenue chez *La Table Gourmande*</h1>
        <p>Nous sommes ravis de vous accueillir dans notre établissement. Profitez de notre atmosphère chaleureuse et de nos plats faits maison pour une expérience culinaire inoubliable.</p>
        <p>Voici notre menu pour éveiller vos papilles :</p>
      </header>
      {!orderPlaced ? (
        <div className="content-container">
          <MenuDisplay addToCart={addToCart} />
          {/* Passer removeFromCart comme prop */}
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      ) : (
        <Order cart={cart} />
      )}
      {!orderPlaced && cart.length > 0 && (
        <div className="order-button-container">
          <button className="order-button" onClick={placeOrder}>
            Passer la commande
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
