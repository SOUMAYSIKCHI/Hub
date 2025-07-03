import React from 'react';
import { Code, Users, Zap, Heart, Target, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400 rounded-full filter blur-3xl animate-pulse delay-500"></div>
                </div>
                
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-8 shadow-2xl">
                            <Code className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                            InterviewHub
                        </h1>
                        <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Your comprehensive technical interview preparation companion
                        </p>
                    </div>

                    {/* Main Content Cards */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {/* Primary Description Card */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                <strong className="text-blue-600">InterviewHub</strong> is a free and structured resource hub created to help aspiring developers prepare for technical interviews. Whether you're brushing up on HTML, CSS, JavaScript, or diving into core CS topics like Data Structures and Algorithms, InterviewHub provides curated, easy-to-understand notes and examples to guide your learning journey.
                            </p>
                        </div>

                        {/* DevSync Ecosystem Card */}
                        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                            <div className="flex items-center mb-6">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">DevSync Ecosystem</h2>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Built under the DevSync ecosystem, our goal is to empower self-learners, freshers, and working professionals with clear, actionable content that cuts through the noise.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Structured Learning</h3>
                            <p className="text-gray-600">Organized content that builds knowledge progressively</p>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Completely Free</h3>
                            <p className="text-gray-600">Quality education accessible to everyone</p>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Always Evolving</h3>
                            <p className="text-gray-600">Continuously updated with fresh content</p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-center shadow-2xl">
                        <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing Community</h2>
                        <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                            Version 1 is live and continuously evolving — feedback, corrections, and suggestions are always welcome.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white font-medium border border-white/30">
                                📚 Comprehensive Notes
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white font-medium border border-white/30">
                                💡 Real Examples
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white font-medium border border-white/30">
                                🚀 Interview Ready
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;