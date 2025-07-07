import { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Github,
  Code,
  ExternalLink,
  Menu,
  X,
  Briefcase,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubjectsOpen, setIsSubjectsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSubjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const subjects = [
    { name: 'C Programming', file: 'c.json' },
    { name: 'Computer Networks', file: 'cn.json' },
    // { name: 'CSS', file: 'css.json' },
    // { name: 'Data Structures', file: 'datastructure.json' },
    { name: 'DBMS', file: 'dbms.json' },
    // { name: 'Express JS', file: 'expressjs.json' },
    // { name: 'Git & GitHub', file: 'git&github.json' },
    // { name: 'HTML', file: 'html.json' },
    // { name: 'Java', file: 'java.json' },
    { name: 'JavaScript', file: 'javascript.json' },
    // { name: 'MongoDB', file: 'mongodb.json' },
    // { name: 'MySQL Query Examples', file: 'mysql-query-example.json' },
    // { name: 'Node JS', file: 'nodejs.json' },
    { name: 'Operating Systems', file: 'os.json' },
    // { name: 'Python', file: 'python.json' },
    // { name: 'React JS', file: 'reactjs.json' },
    { name: 'Software Engineering', file: 'software-engineering.json' },
    { name: 'Software Testing', file: 'software-testing.json' }
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              InterviewHub
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Subjects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex cursor-pointer items-center space-x-1 text-black hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsSubjectsOpen((prev) => !prev)}
              >
                <span>Subjects</span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${isSubjectsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSubjectsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                  <div className="p-4">
                    <div className="text-sm font-semibold text-black mb-3">Choose Your Subject</div>
                    <div className="grid grid-cols-2 gap-2 max-h-80 overflow-y-auto">
                      {subjects.map((subject) => (
                        <Link
                          key={subject.file}
                          to={`/subject/${subject.file.replace('.json', '')}`}
                          onClick={() => setIsSubjectsOpen(false)}
                          className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-sm text-black hover:text-blue-600"
                        >
                          {subject.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/CompanyPrep"
              className="flex items-center space-x-1 text-black hover:text-blue-600 font-medium transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>InterviewVault</span>
            </Link>

            <Link
              to="/about"
              className="flex items-center space-x-1 text-black hover:text-blue-600 font-medium transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>About Us</span>
            </Link>

            {/* ✅ Blog Link (NEW) */}
            <Link
              to="/blog"
              className="flex items-center space-x-1 text-black hover:text-blue-600 font-medium transition-colors"
            >
              <span>Blogs</span>
            </Link>
          </nav>

          {/* CTA Link */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/DevMilapindia/"
              className="flex items-center space-x-2 text-black hover:text-blue-600 transition-colors text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>DevMilap Team</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {/* Subjects Dropdown */}
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full text-left text-black font-medium"
                onClick={() => setIsSubjectsOpen(!isSubjectsOpen)}
              >
                <span>Subjects</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSubjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSubjectsOpen && (
                <div className="mt-2 pl-4 space-y-1 max-h-60 overflow-y-auto">
                  {subjects.map((subject) => (
                    <Link
                      key={subject.file}
                      to={`/subject/${subject.file.replace('.json', '')}`}
                      className="block py-1 text-sm text-black hover:text-blue-600"
                      onClick={() => {
                        setIsSubjectsOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      {subject.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Prep */}
            <Link
              to="/CompanyPrep"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 py-2 text-black hover:text-blue-600 font-medium"
            >
              <Briefcase className="w-4 h-4" />
              <span>Company Prep</span>
            </Link>

            {/* About Us */}
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 py-2 text-black hover:text-blue-600 font-medium"
            >
              <Info className="w-4 h-4" />
              <span>About Us</span>
            </Link>

            {/* ✅ Blog Link (NEW) */}
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 py-2 text-black hover:text-blue-600 font-medium"
            >
              <span>Blogs</span>
            </Link>

            {/* DevMilap Team */}
            <a
              href="#"
              className="flex items-center space-x-2 py-2 text-black hover:text-blue-600 text-sm font-medium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <ExternalLink className="w-4 h-4" />
              <span>DevMilap Team</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
