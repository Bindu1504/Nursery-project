import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import Navbar from "./Navbar";

const plantCategories = {
  "Indoor Plants": [
    { id: 1, name: "Aloe Vera", price: 299 },
    { id: 2, name: "Snake Plant", price: 399 },
    { id: 3, name: "Money Plant", price: 199 },
    { id: 4, name: "Peace Lily", price: 499 },
    { id: 5, name: "Spider Plant", price: 249 },
    { id: 6, name: "Rubber Plant", price: 599 }
  ],

  "Outdoor Plants": [
    { id: 7, name: "Rose Plant", price: 349 },
    { id: 8, name: "Hibiscus", price: 299 },
    { id: 9, name: "Bougainvillea", price: 399 },
    { id: 10, name: "Jasmine", price: 259 },
    { id: 11, name: "Tulsi", price: 149 },
    { id: 12, name: "Lavender", price: 499 }
  ],

  "Medicinal Plants": [
    { id: 13, name: "Neem", price: 199 },
    { id: 14, name: "Ashwagandha", price: 299 },
    { id: 15, name: "Basil", price: 179 },
    { id: 16, name: "Mint", price: 149 },
    { id: 17, name: "Curry Leaf", price: 199 },
    { id: 18, name: "Amla", price: 249 }
  ]
};

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Navbar />

      <div className="product-list">
        <h2>Our Plant Collection</h2>

        {Object.keys(plantCategories).map((category) => (
          <div key={category} className="category-section">
            <h3>{category}</h3>

            <div className="product-grid">
              {plantCategories[category].map((plant) => (
                <div key={plant.id} className="product-card">
                  <h4>{plant.name}</h4>
                  <p>₹{plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
