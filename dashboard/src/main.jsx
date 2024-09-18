
import { StrictMode, useState, createContext } from 'react'; // Added createContext import
import { createRoot } from 'react-dom/client'; // Use this `createRoot` instead of `ReactDOM.createRoot`
import App from './App.jsx';

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Changed `user` default value to `null`

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <App />
    </Context.Provider>
  );
};

// Using the `createRoot` method you imported
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);

