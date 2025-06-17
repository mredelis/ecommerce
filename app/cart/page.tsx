import ShoppingCartList from './ShoppingCartList';

export const dynamic = 'force-dynamic';

export default async function CartPage() {
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000';

  const response = await fetch(`${baseUrl}/api/users/2/cart`);
  const cartProducts = await response.json();

  return <ShoppingCartList initialCartProducts={cartProducts} />;
}
