import React, { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/index.scss';
import Home from './pages/Home';
import Header from 'components/Header';
import About from 'pages/About';
import Blog from 'pages/Blog';
import Archives from 'pages/Archives';
import Legales from 'pages/Legales';
import NotFound from 'pages/404';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/mentions-legales" element={<Legales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
