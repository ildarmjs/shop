import { Header, } from './Header';
import { BestSellers } from './BestSellers';
import { Product } from './Product';
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className='appContainer'>
      <hr className="divider" />
      <Header />

        <Routes>
          <Route path="/" element={<BestSellers />} />
          <Route path="product/:productId" element={<Product />} />
        </Routes>

    </div>
  );
}

export default App;
