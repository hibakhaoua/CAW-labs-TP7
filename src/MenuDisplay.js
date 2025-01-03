import React, { useState } from "react";
import MenuItem from "./MenuItem";
import "./MenuDisplay.css";

const menuCategories = {
  Pizza: [
    { id: 1, name: "Margherita", description: "Pizza classique", price: 400 , image: "https://cdn.shopify.com/s/files/1/0274/9503/9079/files/20220211142754-margherita-9920_5a73220e-4a1a-4d33-b38f-26e98e3cd986.jpg?v=1723650067", category: "Pizza" },
    { id: 2, name: "Pepperoni", description: "Pizza au pepperoni", price: 450, image: "https://images.mrcook.app/recipe-image/01909302-ecf1-75cb-afa4-4388e995f888", category: "Pizza" },
    { id: 3, name: "La pizza italienne", description: "La pizza italienne traditionnelle", price: 400 , image: "https://st3.idealista.it/news/archivie/styles/open_graph/public/2022-10/media/image/aurelien-lemasson-theobald-x00czbt4dfk-unsplash.jpg?VersionId=B5jNFtedvTueJ3R90657w8GcCx2QSfOv&itok=sQTTkxp_", category: "Pizza" },
  ],
  Sandwich: [
    { id: 4, name: "Club Sandwich", description: "Sandwich au poulet", price: 350, image: "https://images.arla.com/recordid/15F33607-F6D9-4952-B6AA210D3033BF14/club-sandwich1.jpg?format=jpg&width=1200&height=630&mode=crop", category: "Sandwich" },
    { id: 5, name: "Sandwich géant", description: "Sandwich géant au jambon", price: 500, image: "https://images.radio-canada.ca/v1/alimentation/recette/4x3/sandwich-geant-jambon-erable-salade-chou-sesame.jpg", category: "Sandwich" },
  ],
  "Plats principaux": [
    { id: 6, name: "Steak", description: "Steak grillé", price: 800, image: "https://www.heathrilesbbq.com/cdn/shop/articles/wagyu_denver_steaks_blog_bf1b7ede-f02b-4fbb-abb7-cefb46c7503f.jpg?v=1668807435", category: "Plats principaux" },
    { id: 7, name: "Paëlla", description: "Paëlla 3 personnes", price: 1000, image: "https://files.meilleurduchef.com/mdc/photo/recette/paella/paella-1200.jpg", category: "Plats principaux" },
  ],
};



const MenuDisplay = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");

  return (
    <div className="menu-display">
      <nav className="category-nav">
        {Object.keys(menuCategories).map((category) => (
          <button
            key={category}
            className="category-button"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>
      <div className="menu-items">
        {menuCategories[selectedCategory].map((item) => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default MenuDisplay;
