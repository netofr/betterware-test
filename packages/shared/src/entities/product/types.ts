export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
}

export type ProductsStatus = 'idle' | 'loading' | 'succeeded' | 'failed';
