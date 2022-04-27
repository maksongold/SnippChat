import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import {MainPage} from './pages/MainPage/MainPage';
import {AuthorizationPage} from "./pages/AuthorizationPage/AuthorizationPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/authorization" element={<AuthorizationPage/>} />
              {/*<Route path="/registration" element={} />*/}
              {/*<Route path="/messenger" element={} />*/}
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
