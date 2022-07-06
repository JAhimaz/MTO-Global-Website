import React from 'react';
import './css/App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { LanguageProvider } from './containers/Language';

import { Home } from './routes/Home';
import { Navigation } from './routes/Navigation';
import { Footer } from './routes/Footer';

// Routes

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navigation />
        <BrowserRouter>          
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
