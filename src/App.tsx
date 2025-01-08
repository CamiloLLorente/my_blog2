import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PostView from './pages/PostView';
import { About } from './pages/About';
import DiscoverAndLearn from './pages/DiscoverAndLearn';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
        <Header />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<PostView />} />
            <Route path="/discover-and-learn" element={<DiscoverAndLearn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;