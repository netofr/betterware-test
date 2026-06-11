export interface ApiConfig {
  productsEndpoint: string;
}

let apiConfig: ApiConfig | null = null;

export function configureApi(config: ApiConfig): void {
  if (!config.productsEndpoint?.trim()) {
    throw new Error(
      'configureApi: productsEndpoint is required. Set PRODUCTS_API_URL in your .env file.',
    );
  }

  apiConfig = {
    productsEndpoint: config.productsEndpoint.trim(),
  };
}

export function getApiConfig(): ApiConfig {
  if (!apiConfig) {
    throw new Error(
      'API is not configured. Call configureApi() before making requests.',
    );
  }

  return apiConfig;
}
