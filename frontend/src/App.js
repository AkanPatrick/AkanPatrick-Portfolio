import React from 'react';

import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.scss';

const App = () => (
  <div className="app">
   <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Footer />
    {/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="skills" element={<Skills />} />
            <Route path="testimonial" element={<Testimonial />} />
            <Route path="posts" element= {<AllPosts/>} />
            <Route path="/:slug" element= {<SinglePost/>} />
          </Route>
      </Routes>
    </BrowserRouter> */}
  
 </div>
);

export default App;

