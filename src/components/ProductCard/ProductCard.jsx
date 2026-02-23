import { useState } from "react";
import "./ProductCard.css";

function ProductCard({ name, price, stock, image }) {

const [rating, setRating] = useState(0);
const [added, setAdded] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleCart = () => {
    setAdded(true);
  };

  return (
    <div className="card">

      <img src={image} alt={name} className="product-image" />

      <h2>{name}</h2>
      <p className="price">{price}</p>

      <p className={stock ? "in-stock" : "out-stock"}>
        {stock ? "In Stock" : "Out of Stock"}
      </p>

      {/* Rating */}
      <div className="rating">
  {[1,2,3,4,5].map((star) => (
    <span
      key={star}
      className={star <= rating ? "star active" : "star"}
      onClick={() => setRating(star)}
    >
      ★
    </span>
  ))}
</div>


      {/* Add to Cart */}
      <button
        disabled={!stock}
        className="cart-btn"
        onClick={handleCart}
      >
        {added ? "Added ✅" : "Add to Cart"}
      </button>

    </div>
  );
}

export default ProductCard;
