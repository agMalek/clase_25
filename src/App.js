
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/blog" element={<Blog />}/> 
        <Route path="/contact/" element={<Contact />}/> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
