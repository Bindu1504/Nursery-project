import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import plants from "../data/plants";
import "./ProductList.css";

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>

      <div className="product-grid">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p className="price">₹{plant.price}</p>

            <button
              className="add-btn"
              onClick={() => handleAddToCart(plant)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
