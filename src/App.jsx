import ProductCard from "./components/productcard/ProductCard";
import "./App.css";

import headphones from "./assets/images/headphones.jpg";
import watch from "./assets/images/smartwatch.jpg";
import speaker from "./assets/images/speaker.jpg";
import mouse from "./assets/images/mouse.jpg";
import laptop from "./assets/images/laptop.jpg";
import hub from "./assets/images/hub.jpg";

function App() {
  return (
    <div className="app-container">
      <h1>Product Store</h1>

      <div className="card-container">
        <ProductCard name="Wireless Headphones" price="₹2,999" stock={true} image={headphones}/>
        <ProductCard name="Smart Watch" price="₹4,999" stock={false} image={watch}/>
        <ProductCard name="Bluetooth Speaker" price="₹1,499" stock={true} image={speaker}/>
        <ProductCard name="Gaming Mouse" price="₹899" stock={true} image={mouse}/>
        <ProductCard name="Laptop Stand" price="₹1,199" stock={false} image={laptop}/>
        <ProductCard name="USB-C Hub" price="₹2,199" stock={true} image={hub}/>
      </div>
    </div>
  );
}

export default App;
