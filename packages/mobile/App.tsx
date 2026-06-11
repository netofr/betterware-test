import { Provider } from 'react-redux';
import { configureApi } from 'shared';

import { RootNavigator } from './src/app/navigation';
import { store } from './src/app/store';
import { PRODUCTS_API_URL } from './src/config/env';
import { ToastProvider } from './src/shared/ui';

configureApi({
  productsEndpoint: PRODUCTS_API_URL,
});

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <RootNavigator />
      </ToastProvider>
    </Provider>
  );
}

export default App;
