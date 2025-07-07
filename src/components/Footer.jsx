import { Code, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">InterviewHub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for technical interview preparation. Master every topic, ace every interview.
            </p>
          </div>

          {/* Subjects */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">📚 Subjects</h3>
            <div className="grid grid-cols-2 gap-2">
              {subjects.map(subject => (
                <Link
                  key={subject.file}
                  to={`/subject/${subject.file.replace('.json', '')}`}
                  className="block text-gray-300 hover:text-blue-400 transition-colors text-sm py-1"
                >
                  {subject.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">💼 Support Us</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>DevMilap Team</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          <div className="flex justify-center space-x-6 text-gray-400 mb-2">
            <Link to="/about" className="hover:text-blue-400 underline">
              About
            </Link>
            <Link to="/privacy-policy" className="hover:text-blue-400 underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 underline">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-gray-500">
            © 2025 <span className="font-medium text-white">InterviewHub</span> by{' '}
            <a
              href="https://www.linkedin.com/company/DevMilapindia/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-blue-400"
            >
              DevMilap
            </a>. Made with ❤️ for the developer community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
