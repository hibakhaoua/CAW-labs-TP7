import React from "react";
import "./Cart.css";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  // Définir les couleurs pour chaque catégorie
  const categoryColors = {
    Pizza: "#ffcccb", // Rouge clair
    Sandwich: "#fdfd96", // Jaune pâle
    "Plats principaux": "#c2f0c2", // Vert clair
  };

  // Fonction pour obtenir la couleur de la catégorie
  const getCategoryColor = (category) => categoryColors[category] || "#ffffff";

  return (
    <div className="cart">
      <h2 className="cart-title">Votre Panier</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Votre panier est vide.</p>
      ) : (
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li
              key={index}
              className="cart-item"
              style={{
                backgroundColor: getCategoryColor(item.category),
              }}
            >
              <p>
                {item.name} - ${item.price.toFixed(2)}
              </p>
              {/* Bouton de suppression */}
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)} // Appeler la fonction pour supprimer l'item
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default Cart;
