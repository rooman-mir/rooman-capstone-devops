import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="app-header">
          <h1>🛒 Mir's Go-To Store</h1>
          <p>Your One-Stop Shop for all you Essentials!</p>
        </header>
        <main className="app-main">
          <ProductList />
          <Cart />
        </main>
        <footer className="app-footer">
          <p>Built with React + Vite | DevOps Learning Journey</p>
        </footer>
      </div>
    </CartProvider>
  );
}

export default App;