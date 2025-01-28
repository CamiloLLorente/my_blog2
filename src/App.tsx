import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { About } from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/blog/Blog';
import PostView from './pages/blog/PostView';
import BibleVersesSection from './pages/edutainment/BibleVersesSection';
import DiscoverAndLearn from './pages/edutainment/DiscoverAndLearn';
import FavoriteVerses from './pages/edutainment/FavoriteVerses';
import ReviewYourVerses from './pages/edutainment/ReviewYourVerses';

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
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