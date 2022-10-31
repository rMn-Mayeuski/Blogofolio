import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './provider/ThemeProvider';
import App from './App/App';
import {Provider} from "react-redux";
import { store } from './SharedLogic/reducers/RootReducer';
import { PaginationProvider } from './context/PaginationContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PaginationProvider>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PaginationProvider>
    </Provider>
  </React.StrictMode>
);
