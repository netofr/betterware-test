export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  imageUrl?: string;
}

export type ProductsStatus = "idle" | "loading" | "succeeded" | "failed";
