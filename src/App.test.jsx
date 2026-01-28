import { describe, it, expect } from 'vitest';

describe('E-Commerce App', () => {
  
  it('should have correct product data', async () => {
    const productsData = await import('./data/products.json');
    expect(productsData.products).toHaveLength(6);
  });

  it('should have Wireless Headphones product', async () => {
    const productsData = await import('./data/products.json');
    const headphones = productsData.products.find(p => p.name === 'Wireless Headphones');
    expect(headphones).toBeDefined();
    expect(headphones.price).toBe(79.99);
  });

  it('should have Running Shoes product', async () => {
    const productsData = await import('./data/products.json');
    const shoes = productsData.products.find(p => p.name === 'Running Shoes');
    expect(shoes).toBeDefined();
    expect(shoes.price).toBe(129.99);
  });

  it('should have all required product fields', async () => {
    const productsData = await import('./data/products.json');
    productsData.products.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('image');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('stock');
    });
  });

  it('should have positive prices for all products', async () => {
    const productsData = await import('./data/products.json');
    productsData.products.forEach(product => {
      expect(product.price).toBeGreaterThan(0);
    });
  });

  it('should have positive stock for all products', async () => {
    const productsData = await import('./data/products.json');
    productsData.products.forEach(product => {
      expect(product.stock).toBeGreaterThan(0);
    });
  });

  it('should have unique product IDs', async () => {
    const productsData = await import('./data/products.json');
    const ids = productsData.products.map(p => p.id);
    const uniqueIds = [...new Set(ids)];
    expect(uniqueIds).toHaveLength(ids.length);
  });

  it('should have correct categories', async () => {
    const productsData = await import('./data/products.json');
    const validCategories = ['Electronics', 'Sports', 'Home'];
    productsData.products.forEach(product => {
      expect(validCategories).toContain(product.category);
    });
  });

  it('should calculate correct total for sample cart', async () => {
    const productsData = await import('./data/products.json');
    const headphones = productsData.products.find(p => p.name === 'Wireless Headphones');
    const shoes = productsData.products.find(p => p.name === 'Running Shoes');
    
    const cartTotal = headphones.price + shoes.price;
    expect(cartTotal).toBeCloseTo(209.98, 2);
  });

});