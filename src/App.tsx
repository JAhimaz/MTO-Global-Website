import React from 'react';
import './css/App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { LanguageProvider } from './containers/Language';

import { Home } from './routes/Home';

// Routes

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
