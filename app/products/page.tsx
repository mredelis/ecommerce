import ProductsList from '../ProductsList';

export default async function ProductsPage() {
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/products`, {
    cache: 'no-store', // optional: disables caching for fresh data
  });
  const products = await response.json();

  const response2 = await fetch(`${baseUrl}/api/users/2/cart`, {
    cache: 'no-store',
  });
  const cartProducts = await response2.json();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ProductsList products={products} initialCartProducts={cartProducts} />
    </div>
  );
}
