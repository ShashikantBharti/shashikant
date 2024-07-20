import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills' element={<Skills />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='experience' element={<Experience />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blogs' element={<Blogs />} />

          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
