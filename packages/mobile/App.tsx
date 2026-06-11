import { Provider } from 'react-redux';
import { configureApi } from 'shared';

import { RootNavigator } from './src/app/navigation';
import { store } from './src/app/store';
import { PRODUCTS_API_URL } from './src/config/env';

configureApi({
  productsEndpoint: PRODUCTS_API_URL,
});

function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;
