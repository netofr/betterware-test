import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { configureApi, hydrateCartFromStorage } from 'shared';

import { cartStorage } from './src/app/cart-storage';
import { RootNavigator } from './src/app/navigation';
import { store } from './src/app/store';
import { PRODUCTS_API_URL } from './src/config/env';
import { ToastProvider } from '@/shared';

configureApi({
  productsEndpoint: PRODUCTS_API_URL,
});

function App() {
  const [isCartHydrated, setIsCartHydrated] = useState(false);

  useEffect(() => {
    hydrateCartFromStorage(store, cartStorage).finally(() => {
      setIsCartHydrated(true);
    });
  }, []);

  if (!isCartHydrated) {
    return null;
  }

  return (
    <Provider store={store}>
      <ToastProvider>
        <RootNavigator />
      </ToastProvider>
    </Provider>
  );
}

export default App;
