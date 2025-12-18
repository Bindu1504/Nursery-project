import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="landing-page">
      {!showProducts ? (
        <div className="content">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your one-stop destination for healthy and beautiful plants</p>

          <button
            className="get-started-btn"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
