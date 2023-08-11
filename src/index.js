import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import App from './App';
import { MakeContext } from './components/context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <MakeContext>
          <App />
        </MakeContext>
      </BrowserRouter>
  </React.StrictMode>
);
