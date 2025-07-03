import React from 'react';

const Unknown = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-50 flex items-center justify-center">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{
            width: "500px",
            height: "500px",
            top: "-250px",
            right: "-250px",
            background: "linear-gradient(135deg, #38bdf8, #a78bfa)"
          }}
        ></div>
        <div
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{
            width: "500px",
            height: "500px",
            bottom: "-250px",
            left: "-250px",
            background: "linear-gradient(135deg, #facc15, #4ade80)"
          }}
        ></div>
      </div>

      {/* Main 404 Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        {/* Animated 404 Title */}
        <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mb-6">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
          Looks like you've navigated to a missing resource.
          <br />
          Let's get you back to preparation!
        </p>

        {/* Action Button */}
        <div className="flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="px-6 cursor-pointer py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-transform hover:-translate-y-1"
          >
            Go Back
          </button>
        </div>

        {/* Floating Symbols */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute text-gray-300 text-6xl font-mono opacity-30 animate-float" style={{ top: '15%', left: '10%' }}>{'</>'}</div>
          <div className="absolute text-gray-300 text-5xl font-mono opacity-30 animate-float-reverse" style={{ top: '30%', right: '15%' }}>{'{}'}</div>
          <div className="absolute text-gray-300 text-4xl font-mono opacity-30 animate-float" style={{ bottom: '20%', left: '20%' }}>{'[]'}</div>
          <div className="absolute text-gray-300 text-3xl font-mono opacity-30 animate-float-reverse" style={{ bottom: '30%', right: '10%' }}>{'()'}</div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-reverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Unknown;
