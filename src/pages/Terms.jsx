import React, { useState, useEffect } from 'react';
import { Shield, FileText, Users, ExternalLink, RefreshCw, CheckCircle, Check, X } from 'lucide-react';

const Terms = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showAcceptanceBox, setShowAcceptanceBox] = useState(true);

    // In a real application, you would use localStorage here:
    // const [termsAccepted, setTermsAccepted] = useState(() => {
    //     return localStorage.getItem('termsAccepted') === 'true';
    // });

    const handleAcceptTerms = () => {
        setTermsAccepted(true);
        setShowAcceptanceBox(false);
        // In a real application, you would save to localStorage:
        // localStorage.setItem('termsAccepted', 'true');
    };

    const handleDeclineTerms = () => {
        setTermsAccepted(false);
        setShowAcceptanceBox(false);
        // In a real application, you might redirect or show a message
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-32 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-32 right-20 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-400 rounded-full filter blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-xl">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Understanding your rights and responsibilities when using InterviewHub
                    </p>
                </div>

                {/* Introduction Card */}
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 mb-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                            <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Agreement</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        By accessing and using <strong className="text-blue-600">InterviewHub</strong>, you accept and agree to be bound by the terms and provisions of this agreement.
                    </p>
                </div>

                {/* Terms Acceptance Box - Positioned in Middle */}
                {showAcceptanceBox && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-full transform animate-pulse">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-xl">
                                    <Shield className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Accept Terms & Conditions</h3>
                                <p className="text-gray-600">
                                    Please read and accept our terms and conditions to continue using InterviewHub.
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <button
                                    onClick={handleAcceptTerms}
                                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <Check className="w-5 h-5 mr-2" />
                                    I Accept the Terms & Conditions
                                </button>
                                
                                <button
                                    onClick={handleDeclineTerms}
                                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <X className="w-5 h-5 mr-2" />
                                    I Decline
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Terms Acceptance Status Banner */}
                {termsAccepted && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-lg mb-8">
                        <div className="flex items-center justify-center text-white">
                            <CheckCircle className="w-6 h-6 mr-3" />
                            <span className="font-semibold">Terms & Conditions Accepted</span>
                        </div>
                    </div>
                )}

                {!termsAccepted && !showAcceptanceBox && (
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-4 shadow-lg mb-8">
                        <div className="flex items-center justify-center text-white">
                            <X className="w-6 h-6 mr-3" />
                            <span className="font-semibold">Terms & Conditions Not Accepted</span>
                        </div>
                    </div>
                )}

                {/* Terms Grid */}
                <div className="grid gap-6 mb-12">
                    {/* Use of Content */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Use of Content</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            All content on this site is for educational purposes only. While we aim to keep the material accurate and up to date, InterviewHub does not guarantee any results from its use.
                        </p>
                    </div>

                    {/* Fair Use */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Fair Use</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                You may view, download, and share the content for personal and academic use. Reproduction or redistribution of the material for commercial purposes is prohibited without permission.
                            </p>
                            <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                                <div className="flex items-center mb-2">
                                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                                    <span className="text-green-800 font-semibold">Allowed Uses</span>
                                </div>
                                <ul className="text-green-700 space-y-1 ml-7">
                                    <li>• Personal study and learning</li>
                                    <li>• Academic research and education</li>
                                    <li>• Sharing with fellow learners</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* External Links */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-4">
                                <ExternalLink className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">External Links</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            This site may include links to third-party websites. We do not endorse or assume responsibility for any content, products, or services offered by third parties.
                        </p>
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-4">
                            <div className="flex items-center">
                                <ExternalLink className="w-5 h-5 text-amber-600 mr-2" />
                                <span className="text-amber-800 font-semibold">Third-party content is beyond our control</span>
                            </div>
                        </div>
                    </div>

                    {/* Changes to Terms */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                                <RefreshCw className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Changes to Terms</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            We reserve the right to modify these terms at any time. It is your responsibility to review them periodically.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mt-4">
                            <div className="flex items-center">
                                <RefreshCw className="w-5 h-5 text-blue-600 mr-2" />
                                <span className="text-blue-800 font-semibold">Stay updated by checking this page regularly</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 text-center shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h3>
                    <p className="text-blue-100 text-lg mb-6">
                        If you have any questions about these Terms and Conditions, please feel free to reach out to us.
                    </p>
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white font-medium border border-white/30">
                        <Shield className="w-5 h-5 mr-2" />
                        Your privacy and rights are important to us
                    </div>
                </div>

                {/* Last Updated */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        Last updated: {new Date().toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;