import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import Contact from './pages/Contact';
import PostView from './pages/blog/PostView';
import { About } from './pages/About';
import DiscoverAndLearn from './pages/edutainment/DiscoverAndLearn';
import BibleVersesSection from './pages/edutainment/BibleVersesSection';
import FavoriteVerses from './pages/edutainment/FavoriteVerses';
import ReviewYourVerses from './pages/edutainment/ReviewYourVerses';

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
            <Route path="/bible_verses_section" element={<BibleVersesSection />} />
            <Route path="/favorite_verses" element={<FavoriteVerses />} />
            <Route path="/review_your_verses" element={<ReviewYourVerses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;