import { useEffect, useState } from 'react';

type Product = { id: number; name: string; price: number };

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch('/api/products')
      .then(async response => {
        if (!response.ok) throw new Error('Failed to load products');
        return response.json() as Promise<Product[]>;
      })
      .then(setProducts)
      .catch(err => setError(err instanceof Error ? err.message : 'Unexpected error'))
      .finally(() => setLoading(false));
  }, []);

  // TODO TASK 1: Filter products by name using the search input (case-insensitive).
  const visibleProducts = products;

  async function addProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO TASK 3: Send POST /api/products with { name, price }.
    // On success, update the displayed list and clear the form.
    // Display a useful error message if the request fails.
    void name;
    void price;
    setError('Add product has not been implemented yet.');
  }

  return <section>
    <div className="toolbar"><label>Search products<input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search by name" /></label></div>
    {loading ? <p>Loading products…</p> : error ? <p role="alert" className="error">{error}</p> : null}
    <ul>{visibleProducts.map(product => <li key={product.id}><span>{product.name}</span><strong>₪{product.price.toFixed(2)}</strong></li>)}</ul>
    <h2>Add a product</h2>
    <form onSubmit={addProduct}>
      <label>Name<input value={name} onChange={event => setName(event.target.value)} required /></label>
      <label>Price<input type="number" min="0.01" step="0.01" value={price} onChange={event => setPrice(event.target.value)} required /></label>
      <button type="submit">Add Product</button>
    </form>
  </section>;
}
