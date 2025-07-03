import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Code, 
  Copy, 
  Check,
  FileText,
  Lightbulb,
  MessageSquare,
  FolderOpen
} from 'lucide-react';

const Content = ({ data, subjectId }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [activeTab, setActiveTab] = useState('explanation');
  const [copiedStates, setCopiedStates] = useState({});

  // Sample data structure - modified to match your JSON
  const subjectData = data;
  
  // Initialize first topic
  useEffect(() => {
    if (subjectData.topics && subjectData.topics.length > 0) {
      setCurrentTopic(subjectData.topics[0]);
    }
  }, []);

  const selectTopic = (topic) => {
    setCurrentTopic(topic);
    setActiveTab('explanation');
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates(prev => ({ ...prev, [id]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [id]: false }));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const AdBox = ({ type, className }) => (
    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-dashed border-blue-200 rounded-lg p-4 text-center ${className}`}>
      <div className="text-xs text-gray-500 mb-2">Advertisement</div>
      <div className="text-sm font-medium text-gray-700 mb-2">{type} Ad Space</div>
      <div className="text-xs text-gray-400">300x250</div>
    </div>
  );

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:shadow-none lg:z-auto lg:h-screen`}>
      {/* Mobile header */}
      <div className="flex items-center justify-between p-4 border-b lg:hidden">
        <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
        <button
          onClick={() => setSidebarOpen(false)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      {/* Subject title - fixed */}
      <div className="p-4 border-b bg-white">
        <h1 className="text-xl font-bold text-gray-900">{subjectData.subject}</h1>
      </div>
      
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 80px)' }}>
        {/* Topics */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Topics</h3>
          <div className="space-y-2">
            {subjectData.topics && subjectData.topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => selectTopic(topic)}
                className={`flex items-center w-full text-left p-3 rounded-lg transition-colors cursor-pointer ${
                  currentTopic?.title === topic.title
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FileText className="w-4 h-4 mr-3 text-blue-600" />
                <span className="font-medium">{topic.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects */}
        <div className="p-4 border-t">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">Projects</h3>
          <div className="space-y-2">
            {subjectData.projects && subjectData.projects.map((project, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentTopic({ ...project, type: 'project' });
                  setActiveTab('explanation');
                  if (window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className={`flex items-center w-full text-left p-3 rounded-lg transition-colors cursor-pointer ${
                  currentTopic?.title === project.title && currentTopic?.type === 'project'
                    ? 'bg-green-50 text-green-700 border-l-4 border-green-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <FolderOpen className="w-4 h-4 mr-3 text-green-600" />
                <span className="font-medium">{project.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContentTabs = () => {
    if (!currentTopic) return null;
    
    const isProject = currentTopic.type === 'project';
    
    if (isProject) {
      return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <FolderOpen className="w-6 h-6 text-green-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">{currentTopic.title}</h1>
            </div>
            <p className="text-gray-600 mb-6">{currentTopic.description}</p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">Complete Code</h3>
                <button
                  onClick={() => copyToClipboard(currentTopic.code, `project-${currentTopic.title}`)}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors"
                >
                  {copiedStates[`project-${currentTopic.title}`] ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <pre className="text-green-400 p-4 overflow-auto text-sm max-h-96">
                  <code>{currentTopic.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    const tabs = [
      { id: 'explanation', label: 'Explanation', icon: <FileText className="w-4 h-4" /> },
      { id: 'kid', label: 'Simple Terms', icon: <Lightbulb className="w-4 h-4" /> },
      { id: 'code', label: 'Code Example', icon: <Code className="w-4 h-4" /> },
      { id: 'questions', label: 'Interview Q&A', icon: <MessageSquare className="w-4 h-4" /> }
    ];

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="p-6 pb-0">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{currentTopic.title}</h1>
            <div className="flex space-x-1 overflow-x-auto">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {activeTab === 'explanation' && (
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">{currentTopic.content.explanation}</p>
            </div>
          )}
          
          {activeTab === 'kid' && (
            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Lightbulb className="w-6 h-6 text-yellow-600 mr-3" />
                <h3 className="text-lg font-semibold text-yellow-800">Explain Like I'm 5</h3>
              </div>
              <p className="text-yellow-700 leading-relaxed text-lg">{currentTopic.content.explainLikeKid}</p>
            </div>
          )}
          
          {activeTab === 'code' && (
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Code Example</h3>
                  <button
                    onClick={() => copyToClipboard(currentTopic.content.code, `code-${currentTopic.title}`)}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors"
                  >
                    {copiedStates[`code-${currentTopic.title}`] ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-700">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{currentTopic.content.code}</code>
                </pre>
              </div>
              
              {currentTopic.content.input && (
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Input:</h4>
                  <code className="text-blue-800">{currentTopic.content.input}</code>
                </div>
              )}
              
              {currentTopic.content.output && (
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Output:</h4>
                  <pre className="text-green-800 whitespace-pre-wrap">{currentTopic.content.output}</pre>
                </div>
              )}
            </div>
          )}
          
          {activeTab === 'questions' && (
            <div className="space-y-4">
              {currentTopic.interviewQuestions && currentTopic.interviewQuestions.map((qa, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">Q: {qa.question}</h4>
                      <p className="text-gray-700 leading-relaxed">A: {qa.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Sidebar - Fixed */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Ad boxes - Fixed position in top right, adjusted from top-4 to top-20 */}
        <div className="hidden lg:block fixed top-20 right-4 z-30 space-y-4">
          <AdBox type="Banner" className="w-72 h-32" />
          <AdBox type="Square" className="w-72 h-64" />
        </div>

        {/* Content area with margin for ads */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 lg:pr-80 pt-16 lg:pt-8">
          <ContentTabs />
        </div>
      </div>
    </div>
  );
};

export default Content;
