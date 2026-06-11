import { apiClient } from "../../../api/client";
import { getApiConfig } from "../../../api/config";
import type { Product } from "../types";
import type { FakeStoreProduct } from "./types";

function mapFakeStoreProduct(item: FakeStoreProduct): Product {
  return {
    id: String(item.id),
    name: item.title,
    price: item.price,
    description: item.description,
    category: item.category,
    rating: {
      rate: item.rating.rate,
      count: item.rating.count,
    },
    imageUrl: item.image,
  };
}

export async function getProducts(): Promise<Product[]> {
  const { productsEndpoint } = getApiConfig();
  const response = await apiClient.get<FakeStoreProduct[]>(productsEndpoint);

  return response.data.map(mapFakeStoreProduct);
}
