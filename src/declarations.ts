export type Cart = Array<{
  product: Product;
  quantity: number;
}>;

export interface Product {
  qty: number;
  userId: number;
  title: string;
  description: string;
  id: number;
  price: number;
  image: string;
  thumbnail: string;
}

export interface TContext {
  cart: Cart;
  paid: boolean;
  products: Array<Product> | null;
  loading: boolean;
  error: string;
  addToCart: (newProduct: Product) => void;
  removeFromCart: (productToRemove: Product) => void;
  pay: () => void;
  done: () => void;
  getProductQuantity: (idProduct: Product["id"]) => number;
}
