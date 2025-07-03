import React from 'react';
import { Shield, Eye, Cookie, ExternalLink, RefreshCw, Globe, Lock, AlertCircle } from 'lucide-react';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-28 left-16 w-72 h-72 bg-emerald-400 rounded-full filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-28 right-16 w-96 h-96 bg-teal-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-2/3 left-1/4 w-56 h-56 bg-cyan-400 rounded-full filter blur-3xl animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl mb-6 shadow-xl">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        How we protect and handle your data at InterviewHub
                    </p>
                </div>

                {/* Introduction Card */}
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 mb-8 hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                            <Globe className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Our Commitment</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                        At InterviewHub, accessible from <strong className="text-emerald-600">interview-hub.devsync.co.in</strong>, your privacy is important to us. This Privacy Policy outlines the types of data we collect and how we use it.
                    </p>
                </div>

                {/* Privacy Sections */}
                <div className="grid gap-6 mb-12">
                    {/* Information We Collect */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mr-4">
                                <Eye className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Information We Collect</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                We do not collect any personal information directly. Our site may use third-party services like Google AdSense, which may use cookies to serve personalized ads based on your interests.
                            </p>
                            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                                <div className="flex items-center mb-2">
                                    <Lock className="w-5 h-5 text-emerald-600 mr-2" />
                                    <span className="text-emerald-800 font-semibold">Zero Personal Data Collection</span>
                                </div>
                                <p className="text-emerald-700 ml-7">
                                    We prioritize your privacy by not collecting any personal information directly from you.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cookies */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mr-4">
                                <Cookie className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Cookies</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Google may use cookies to display ads based on your prior visits to this or other websites. You can opt out of personalized advertising by visiting Google Ad Settings.
                            </p>
                            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                                <div className="flex items-center mb-3">
                                    <Cookie className="w-5 h-5 text-amber-600 mr-2" />
                                    <span className="text-amber-800 font-semibold">Cookie Control</span>
                                </div>
                                <p className="text-amber-700 mb-3 ml-7">
                                    You have full control over your cookie preferences through Google's settings.
                                </p>
                                <a 
                                    href="https://www.google.com/settings/ads" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 ml-7"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Google Ad Settings
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Third-Party Links */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                                <ExternalLink className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Third-Party Links</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Our website may contain external links (e.g., job platforms, tutorials) — we are not responsible for the privacy practices of other websites.
                            </p>
                            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                                <div className="flex items-center mb-2">
                                    <AlertCircle className="w-5 h-5 text-purple-600 mr-2" />
                                    <span className="text-purple-800 font-semibold">External Site Notice</span>
                                </div>
                                <div className="text-purple-700 ml-7 space-y-1">
                                    <p>• Job platforms and career sites</p>
                                    <p>• Educational tutorials and resources</p>
                                    <p>• Developer tools and documentation</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Policy Updates */}
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                                <RefreshCw className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Policy Updates</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed text-lg">
                                This policy may be updated periodically. Continued use of the website means you agree to the revised terms.
                            </p>
                            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                                <div className="flex items-center">
                                    <RefreshCw className="w-5 h-5 text-blue-600 mr-2" />
                                    <span className="text-blue-800 font-semibold">We'll notify you of any significant changes</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Privacy Principles */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Privacy First</h3>
                        <p className="text-gray-600">No personal data collection or tracking</p>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparent</h3>
                        <p className="text-gray-600">Clear and honest about our practices</p>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">User Control</h3>
                        <p className="text-gray-600">You control your privacy settings</p>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-3xl p-8 text-center shadow-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4">Questions About Privacy?</h3>
                    <p className="text-emerald-100 text-lg mb-6">
                        If you have any questions about this Privacy Policy, please don't hesitate to contact us.
                    </p>
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 text-white font-medium border border-white/30">
                        <Shield className="w-5 h-5 mr-2" />
                        Your privacy is our priority
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

export default Privacy;