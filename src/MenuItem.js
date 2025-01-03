import React from "react";
import "./MenuItem.css";

const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} className="menu-item-image" />
      <h3 className="menu-item-name">{item.name}</h3>
      <p className="menu-item-description">{item.description}</p>
      <p className="menu-item-price">{item.price} DA</p> {/* Affichage du prix en DA */}
      <button className="add-to-cart" onClick={() => addToCart(item)}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default MenuItem;
