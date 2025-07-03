import { useState } from 'react';
import { 
  Building2, 
  Users, 
  Clock, 
  Award, 
  Target, 
  CheckCircle,
  ChevronRight,
  Star,
  TrendingUp,
  Code,
  MessageSquare,
  Brain,
  Laptop
} from 'lucide-react';

const CompanyPrep = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const companies = [
    {
      "id": 1,
      "name": "Google",
      "logo": "🔍",
      "difficulty": "Hard",
      "rounds": [
        {
          "name": "Online Assessment",
          "duration": "90 minutes",
          "questions": "2-3 coding problems",
          "level": "Medium to Hard",
          "topics": ["Data Structures", "Algorithms", "Dynamic Programming"],
          "tips": "Focus on optimal solutions and clean code"
        },
        {
          "name": "Technical Phone Screen",
          "duration": "45 minutes",
          "questions": "1-2 coding problems",
          "level": "Medium",
          "topics": ["Arrays", "Strings", "Trees", "Graphs"],
          "tips": "Think out loud and explain your approach"
        },
        {
          "name": "On-site Round 1",
          "duration": "45 minutes",
          "questions": "1-2 coding problems",
          "level": "Medium to Hard",
          "topics": ["System Design Basics", "Algorithms"],
          "tips": "Ask clarifying questions before coding"
        },
        {
          "name": "On-site Round 2",
          "duration": "45 minutes",
          "questions": "System Design",
          "level": "Hard",
          "topics": ["Scalability", "Database Design", "Caching"],
          "tips": "Start with high-level design, then dive into details"
        },
        {
          "name": "Behavioral Round",
          "duration": "30 minutes",
          "questions": "Leadership & Culture fit",
          "level": "Medium",
          "topics": ["Googleyness", "Leadership", "Problem Solving"],
          "tips": "Use STAR method for answering questions"
        }
      ],
      "totalRounds": 5,
      "averageSalary": "$180,000 - $350,000",
      "hiringRate": "2-3%"
    },
    {
      "id": 2,
      "name": "Microsoft",
      "logo": "🪟",
      "difficulty": "Medium-Hard",
      "rounds": [
        {
          "name": "Online Assessment",
          "duration": "60 minutes",
          "questions": "2 coding problems",
          "level": "Medium",
          "topics": ["Data Structures", "Algorithms", "String Manipulation"],
          "tips": "Focus on edge cases and optimization"
        },
        {
          "name": "Technical Round 1",
          "duration": "60 minutes",
          "questions": "2-3 coding problems",
          "level": "Medium",
          "topics": ["Arrays", "Linked Lists", "Trees", "Recursion"],
          "tips": "Explain your thought process clearly"
        },
        {
          "name": "Technical Round 2",
          "duration": "60 minutes",
          "questions": "1-2 coding + system design",
          "level": "Medium-Hard",
          "topics": ["System Design", "Database", "API Design"],
          "tips": "Consider scalability and trade-offs"
        },
        {
          "name": "Behavioral Round",
          "duration": "45 minutes",
          "questions": "Culture fit & leadership",
          "level": "Medium",
          "topics": ["Growth Mindset", "Collaboration", "Innovation"],
          "tips": "Show examples of learning from failures"
        }
      ],
      "totalRounds": 4,
      "averageSalary": "$130,000 - $280,000",
      "hiringRate": "5-7%"
    },
    {
      "id": 3,
      "name": "Amazon",
      "logo": "📦",
      "difficulty": "Medium-Hard",
      "rounds": [
        {
          "name": "Online Assessment",
          "duration": "105 minutes",
          "questions": "2 coding + 1 debugging",
          "level": "Medium",
          "topics": ["Data Structures", "Algorithms", "Debugging"],
          "tips": "Time management is crucial"
        },
        {
          "name": "Technical Round 1",
          "duration": "60 minutes",
          "questions": "2 coding problems",
          "level": "Medium",
          "topics": ["Arrays", "Strings", "Hash Tables", "Trees"],
          "tips": "Start with brute force, then optimize"
        },
        {
          "name": "Technical Round 2",
          "duration": "60 minutes",
          "questions": "1-2 coding + system design",
          "level": "Medium-Hard",
          "topics": ["System Design", "Distributed Systems"],
          "tips": "Think about Amazon's scale"
        },
        {
          "name": "Behavioral Round",
          "duration": "45 minutes",
          "questions": "Leadership Principles",
          "level": "Hard",
          "topics": ["Customer Obsession", "Ownership", "Invent & Simplify"],
          "tips": "Prepare stories for all 16 leadership principles"
        }
      ],
      "totalRounds": 4,
      "averageSalary": "$120,000 - $270,000",
      "hiringRate": "8-10%"
    },
    {
      "id": 4,
      "name": "Siemens",
      "logo": "",
      "difficulty": "Medium-Hard",
      "rounds": [
        {
          "name": "Phone Screen",
          "duration": "60 minutes",
          "questions": "1-2 coding problems",
          "level": "Medium",
          "topics": ["Data Structures", "Algorithms", "10 Aptitude Q/A", "5 Technical Mcq"],
          "tips": "Focus on clean, efficient code"
        },
        {
          "name": "Technical Round 1",
          "duration": "60 minutes",
          "questions": "2-3 coding problems",
          "level": "Medium",
          "topics": ["Arrays", "Strings", "Trees", "Stacks", "Queues", "Linked-List"],
          "tips": "Think about memory optimization"
        },
        {
          "name": "Technical Round 2",
          "duration": "60 minutes",
          "questions": "System design + coding",
          "level": "Medium-Hard",
          "topics": ["Performance", "Security"],
          "tips": "Consider Siemens System"
        },
        {
          "name": "Behavioral Round",
          "duration": "45 minutes",
          "questions": "Culture & values fit",
          "level": "Medium",
          "topics": ["Innovation", "Attention to Detail", "Collaboration"],
          "tips": "Be Confident"
        }
      ],
      "totalRounds": 4,
      "averageSalary": "$140,000 - $300,000",
      "hiringRate": "3-5%"
    },
    {
      "id": 5,
      "name": "Meta",
      "logo": "👥",
      "difficulty": "Hard",
      "rounds": [
        {
          "name": "Phone Screen",
          "duration": "45 minutes",
          "questions": "1-2 coding problems",
          "level": "Medium",
          "topics": ["Data Structures", "Algorithms", "Graph Theory"],
          "tips": "Focus on optimal solutions"
        },
        {
          "name": "Technical Round 1",
          "duration": "45 minutes",
          "questions": "1-2 coding problems",
          "level": "Medium-Hard",
          "topics": ["Dynamic Programming", "Trees", "Graphs"],
          "tips": "Optimize for both time and space"
        },
        {
          "name": "Technical Round 2",
          "duration": "45 minutes",
          "questions": "System design",
          "level": "Hard",
          "topics": ["Distributed Systems", "Scalability", "Social Networks"],
          "tips": "Think about billions of users"
        },
        {
          "name": "Behavioral Round",
          "duration": "45 minutes",
          "questions": "Culture & impact",
          "level": "Medium",
          "topics": ["Move Fast", "Be Bold", "Focus on Impact"],
          "tips": "Show examples of taking initiative"
        }
      ],
      "totalRounds": 4,
      "averageSalary": "$160,000 - $380,000",
      "hiringRate": "3-4%"
    },
    {
      "id": 6,
      "name": "Netflix",
      "logo": "🎬",
      "difficulty": "Hard",
      "rounds": [
        {
          "name": "Phone Screen",
          "duration": "60 minutes",
          "questions": "1-2 coding problems",
          "level": "Medium-Hard",
          "topics": ["Algorithms", "Data Structures", "Streaming"],
          "tips": "Focus on scalable solutions"
        },
        {
          "name": "Technical Round 1",
          "duration": "90 minutes",
          "questions": "2-3 coding problems",
          "level": "Hard",
          "topics": ["System Design", "Distributed Systems", "Performance"],
          "tips": "Think about Netflix scale"
        },
        {
          "name": "Technical Round 2",
          "duration": "90 minutes",
          "questions": "Architecture discussion",
          "level": "Hard",
          "topics": ["Microservices", "Cloud Architecture", "Data Processing"],
          "tips": "Discuss trade-offs thoroughly"
        },
        {
          "name": "Culture Interview",
          "duration": "60 minutes",
          "questions": "Values & culture fit",
          "level": "Medium",
          "topics": ["Freedom & Responsibility", "High Performance", "Innovation"],
          "tips": "Show ownership and accountability"
        }
      ],
      "totalRounds": 4,
      "averageSalary": "$180,000 - $400,000",
      "hiringRate": "2-3%"
    },
    {
      "id": 7,
      "name": "Apple",
      "logo": "🍎",
      "difficulty": "Hard",
      "rounds": [
        {
          "name": "Recruiter Phone Screen",
          "duration": "30 minutes",
          "questions": "Resume, basic technical fit",
          "level": "Easy",
          "topics": ["Background", "Experience", "Motivation"],
          "tips": "Be concise and highlight relevant experience."
        },
        {
          "name": "Technical Phone Screen",
          "duration": "45-60 minutes",
          "questions": "1-2 coding problems",
          "level": "Medium-Hard",
          "topics": ["Data Structures", "Algorithms", "Problem Solving"],
          "tips": "Explain your thought process and consider edge cases."
        },
        {
          "name": "On-site Interviews (4-5 rounds)",
          "duration": "45-60 minutes each",
          "questions": "Coding, System Design, Behavioral, Past Projects",
          "level": "Medium to Hard",
          "topics": ["Algorithms", "Data Structures", "System Design", "OS", "Networking", "Concurrency"],
          "tips": "Be prepared for deep dives into technical topics and articulate your solutions clearly. Emphasize collaboration and problem-solving skills."
        },
        {
          "name": "Hiring Manager Interview",
          "duration": "45 minutes",
          "questions": "Team fit, leadership, career goals",
          "level": "Medium",
          "topics": ["Teamwork", "Leadership", "Problem Solving"],
          "tips": "Show enthusiasm for Apple's products and culture. Be ready to discuss past challenges and how you overcame them."
        }
      ],
      "totalRounds": 6,
      "averageSalary": "$150,000 - $300,000",
      "hiringRate": "3-5%"
    },
    {
      "id": 8,
      "name": "Adobe",
      "logo": "🅰️",
      "difficulty": "Medium",
      "rounds": [
        {
          "name": "Online Assessment",
          "duration": "60-90 minutes",
          "questions": "2-3 coding problems, MCQs (Aptitude, CS Fundamentals)",
          "level": "Medium",
          "topics": ["Data Structures", "Algorithms", "C++", "Java", "Python"],
          "tips": "Practice competitive programming and fundamental CS concepts."
        },
        {
          "name": "Technical Interview 1",
          "duration": "60 minutes",
          "questions": "1-2 coding problems, CS fundamentals",
          "level": "Medium",
          "topics": ["Arrays", "Strings", "Linked Lists", "Trees", "OS", "DBMS", "OOPS"],
          "tips": "Demonstrate clear understanding of concepts and good coding practices."
        },
        {
          "name": "Technical Interview 2",
          "duration": "60 minutes",
          "questions": "Coding, System Design (basic), Project Discussion",
          "level": "Medium-Hard",
          "topics": ["Advanced Data Structures", "Algorithms", "System Design Principles", "Previous Projects"],
          "tips": "Be prepared to explain your projects in detail and discuss design choices."
        },
        {
          "name": "Managerial/HR Round",
          "duration": "30-45 minutes",
          "questions": "Behavioral, situational, team fit",
          "level": "Medium",
          "topics": ["Communication", "Problem Solving", "Leadership", "Teamwork"],
          "tips": "Highlight your soft skills and how you handle challenging situations."
        }
      ],
      "totalRounds": 4,
      "averageSalary": "$120,000 - $250,000",
      "hiringRate": "5-8%"
    },
    {
      "id": 9,
      "name": "IBM",
      "logo": "🔵",
      "difficulty": "Medium",
      "rounds": [
        {
          "name": "Online Assessment (Cognitive Ability & Technical)",
          "duration": "60-90 minutes",
          "questions": "Logical reasoning, numerical ability, coding problems (easy to medium)",
          "level": "Easy-Medium",
          "topics": ["Aptitude", "Basic Programming", "Data Interpretation"],
          "tips": "Focus on accuracy and speed. Practice logical puzzles."
        },
        {
          "name": "Technical Interview 1",
          "duration": "45-60 minutes",
          "questions": "Coding problems, CS fundamentals",
          "level": "Medium",
          "topics": ["Data Structures", "Algorithms", "OOPS", "DBMS", "Operating Systems", "Networking"],
          "tips": "Be clear on theoretical concepts and apply them to coding problems."
        },
        {
          "name": "Technical Interview 2 (sometimes includes System Design)",
          "duration": "45-60 minutes",
          "questions": "Advanced coding, project discussion, basic system design",
          "level": "Medium",
          "topics": ["Cloud Computing", "AI/ML (if relevant)", "Software Architecture", "Past Projects"],
          "tips": "Show understanding of IBM's technologies and discuss how your skills align."
        },
        {
          "name": "HR Interview",
          "duration": "30 minutes",
          "questions": "Career aspirations, cultural fit, compensation",
          "level": "Easy",
          "topics": ["Motivation", "Teamwork", "Problem-Solving Scenarios"],
          "tips": "Express enthusiasm for working at IBM and highlight your commitment to learning."
        }
      ],
      "totalRounds": 4,
      "averageSalary": "$90,000 - $180,000",
      "hiringRate": "7-10%"
    },
    {
      "id": 10,
      "name": "Salesforce",
      "logo": "☁️",
      "difficulty": "Medium-Hard",
      "rounds": [
        {
          "name": "Initial Screening (Recruiter Phone Screen)",
          "duration": "30-45 minutes",
          "questions": "Background, interest, cultural fit",
          "level": "Easy",
          "topics": ["Motivation", "Experience", "Company Knowledge"],
          "tips": "Research Salesforce's values and products."
        },
        {
          "name": "Technical Assessment (Online/HackerRank)",
          "duration": "60-90 minutes",
          "questions": "2 coding problems (easy to medium)",
          "level": "Medium",
          "topics": ["Data Structures", "Algorithms"],
          "tips": "Practice coding challenges, focus on problem-solving."
        },
        {
          "name": "Technical Interviews (1-3 rounds)",
          "duration": "45-60 minutes each",
          "questions": "Coding, System Design, Project Discussion",
          "level": "Medium-Hard",
          "topics": ["Arrays", "Strings", "Trees", "Graphs", "System Design Principles", "Distributed Systems"],
          "tips": "Articulate your thought process, ask clarifying questions, and discuss trade-offs in system design."
        },
        {
          "name": "Behavioral Interview",
          "duration": "45 minutes",
          "questions": "Teamwork, conflict resolution, cultural alignment",
          "level": "Medium",
          "topics": ["Salesforce's Core Values", "Leadership Principles"],
          "tips": "Use the STAR method to answer behavioral questions. Show alignment with Salesforce's values."
        },
        {
          "name": "Final Interview Round",
          "duration": "60 minutes",
          "questions": "Combination of technical and behavioral, deep dives",
          "level": "Hard",
          "topics": ["System Architecture", "Design Patterns", "Complex Problem Solving"],
          "tips": "Be prepared for in-depth discussions and potentially present past projects."
        }
      ],
      "totalRounds": 4,
      "averageSalary": "$130,000 - $280,000",
      "hiringRate": "4-6%"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Hard': return 'bg-red-100 text-red-700';
      case 'Medium-Hard': return 'bg-orange-100 text-orange-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-green-100 text-green-700';
    }
  };

  const getLevelColor = (level) => {
    if (level.includes('Hard')) return 'text-red-600';
    if (level.includes('Medium')) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">
              Company Interview Preparation
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get ready for your dream job with detailed interview insights, round-by-round breakdown, and expert tips
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Coming Soon</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Comprehensive Interview Preparation Platform</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MessageSquare className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">AI Mock Interviews</h3>
                <p className="text-blue-100 text-sm">Practice with AI-powered mock interviews tailored to each company's style</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Code className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Coding Practice</h3>
                <p className="text-blue-100 text-sm">Company-specific coding problems and solutions with detailed explanations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-blue-200 mx-auto mb-3" />
                <h3 className="font-semibold text-lg mb-2">Success Analytics</h3>
                <p className="text-blue-100 text-sm">Track your preparation progress and get personalized improvement suggestions</p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-xl font-semibold">🚀 Launching in Q4 2025</p>
              <p className="text-blue-100">More companies, detailed question banks, and interactive preparation tools coming soon!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Company List */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-black mb-6">Select Company</h2>
            <div className="space-y-4">
              {companies.map((company) => (
                <div
                  key={company.id}
                  onClick={() => setSelectedCompany(company)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                    selectedCompany?.id === company.id
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{company.logo}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-black">{company.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(company.difficulty)}`}>
                          {company.difficulty}
                        </span>
                        <span className="text-sm text-gray-500">{company.totalRounds} rounds</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Details */}
          <div className="lg:col-span-2">
            {selectedCompany ? (
              <div className="space-y-6">
                {/* Company Overview */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{selectedCompany.logo}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-black">{selectedCompany.name}</h2>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className={`px-3 py-1 rounded-full ${getDifficultyColor(selectedCompany.difficulty)}`}>
                          {selectedCompany.difficulty}
                        </span>
                        <span className="text-gray-600">{selectedCompany.totalRounds} Interview Rounds</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-black">Average Salary</span>
                      </div>
                      <p className="text-blue-700 font-bold">{selectedCompany.averageSalary}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-black">Hiring Rate</span>
                      </div>
                      <p className="text-green-700 font-bold">{selectedCompany.hiringRate}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        <span className="font-semibold text-black">Total Rounds</span>
                      </div>
                      <p className="text-purple-700 font-bold">{selectedCompany.totalRounds}</p>
                    </div>
                  </div>
                </div>

                {/* Interview Rounds */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-2xl font-bold text-black mb-6">Interview Rounds Breakdown</h3>
                  <div className="space-y-6">
                    {selectedCompany.rounds.map((round, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-semibold">{index + 1}</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-black">{round.name}</h4>
                              <div className="flex items-center space-x-4 mt-1">
                                <span className="flex items-center space-x-1 text-gray-600">
                                  <Clock className="w-4 h-4" />
                                  <span>{round.duration}</span>
                                </span>
                                <span className={`font-medium ${getLevelColor(round.level)}`}>
                                  {round.level}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-black mb-2 flex items-center space-x-2">
                              <Code className="w-4 h-4" />
                              <span>Questions</span>
                            </h5>
                            <p className="text-gray-700">{round.questions}</p>
                          </div>
                          <div>
                            <h5 className="font-semibold text-black mb-2 flex items-center space-x-2">
                              <Brain className="w-4 h-4" />
                              <span>Key Topics</span>
                            </h5>
                            <div className="flex flex-wrap gap-1">
                              {round.topics.map((topic, topicIndex) => (
                                <span key={topicIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                          <h5 className="font-semibold text-black mb-2 flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span>Pro Tips</span>
                          </h5>
                          <p className="text-gray-700">{round.tips}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preparation Tips */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-black mb-4">General Preparation Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Practice coding problems daily</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Study system design fundamentals</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Prepare behavioral stories using STAR method</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Research company culture and values</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Practice mock interviews</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-gray-700">Ask thoughtful questions about the role</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-black mb-2">Select a Company</h3>
                <p className="text-gray-600">Choose a company from the list to view detailed interview preparation guide</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPrep;