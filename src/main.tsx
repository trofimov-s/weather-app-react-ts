import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import UserLocationContextProvider from './store/user-location-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserLocationContextProvider>
    <App />
  </UserLocationContextProvider>,
);
