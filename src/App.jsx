import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Content from './pages/Content'
import { subjectMap } from '../src/data/index';
import Unkown from './pages/Uknown';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CompanyPrep from './pages/CompanyPrep';
import Blog from './pages/Blog';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/subject/:subjectId"
            element={<ContentWrapper />}
          />
          <Route path='/CompanyPrep' element={<CompanyPrep/>}/>
          <Route path='/*' element={<Unkown/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/privacy-policy' element={<Privacy/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Wrapper to pass JSON data as prop
import { useParams } from 'react-router-dom';

function ContentWrapper() {
  const { subjectId } = useParams();
  const finalId = subjectId || "javascript";
  const data = subjectMap[finalId];

  if (!data) return <div className="text-center mt-20 text-red-600">Subject not found.</div>;

  return <Content data={data} subjectId={finalId} />;
}

