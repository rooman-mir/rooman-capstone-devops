import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const ProductList = () => {
  const { products } = productsData;

  return (
    <div className="product-list" data-testid="product-list">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;