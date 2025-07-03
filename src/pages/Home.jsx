import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Star, ArrowRight, Code, Database, Cpu, Brain, Globe, Zap, BookOpen, Users, Coffee, ExternalLink, Menu, X, FolderOpen, Target } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom'; // make sure this is at the top

const SubjectCard = ({ subject }) => {
    const Icon = LucideIcons[subject.icon]; // Get the icon component

    return (
        <>
            <div className="group p-5 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                        {Icon && <Icon className="w-7 h-7 text-gray-800" />}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {subject.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                    {subject.description}
                </p>

                <div
                    className={`h-1 w-full rounded-full opacity-70 group-hover:opacity-100 transition-opacity ${subject.color}`}
                ></div>
            </div>
        </>

    );
};

const Home = () => {
    const subjects = [
        {
            name: 'C Programming',
            file: 'c.json',
            icon: 'Terminal',
            color: 'bg-orange-100',
            description: 'Low-level structured programming essentials'
        },
        {
            name: 'Computer Networks',
            file: 'cn.json',
            icon: 'Globe',
            color: 'bg-sky-100',
            description: 'Understand how data moves across the internet'
        },
        {
            name: 'CSS',
            file: 'css.json',
            icon: 'Paintbrush',
            color: 'bg-blue-100',
            description: 'Style beautiful, responsive interfaces'
        },
        {
            name: 'Data Structures',
            file: 'datastructure.json',
            icon: 'Stack',
            color: 'bg-emerald-100',
            description: 'Master arrays, trees, graphs and more'
        },
        {
            name: 'DBMS',
            file: 'dbms.json',
            icon: 'Database',
            color: 'bg-indigo-100',
            description: 'Learn relational database foundations'
        },
        {
            name: 'Express JS',
            file: 'expressjs.json',
            icon: 'Server',
            color: 'bg-neutral-100',
            description: 'Fast and minimal backend for Node.js'
        },
        {
            name: 'Git & GitHub',
            file: 'git&github.json',
            icon: 'GitBranch',
            color: 'bg-rose-100',
            description: 'Version control & collaboration workflows'
        },
        {
            name: 'HTML',
            file: 'html.json',
            icon: 'FileCode2',
            color: 'bg-yellow-100',
            description: 'Structure the web with semantic HTML'
        },
        {
            name: 'Java',
            file: 'java.json',
            icon: 'Coffee',
            color: 'bg-red-100',
            description: 'Object-oriented programming powerhouse'
        },
        {
            name: 'JavaScript',
            file: 'javascript.json',
            icon: 'FileCode',
            color: 'bg-lime-100',
            description: 'The language of the web — dynamic and essential'
        },
        {
            name: 'MongoDB',
            file: 'mongodb.json',
            icon: 'HardDrive',
            color: 'bg-green-100',
            description: 'NoSQL document database with flexibility'
        },
        {
            name: 'MySQL Query Examples',
            file: 'mysql-query-example.json',
            icon: 'ScrollText',
            color: 'bg-purple-100',
            description: 'Hands-on SQL practice and syntax walkthroughs'
        },
        {
            name: 'Node JS',
            file: 'nodejs.json',
            icon: 'Box',
            color: 'bg-lime-50',
            description: 'Server-side JavaScript runtime engine'
        },
        {
            name: 'Operating Systems',
            file: 'os.json',
            icon: 'Cpu',
            color: 'bg-cyan-100',
            description: 'Dive into process, memory, and file systems'
        },
        {
            name: 'Python',
            file: 'python.json',
            icon: 'Feather',
            color: 'bg-fuchsia-100',
            description: 'Readable and versatile language for all levels'
        },
        {
            name: 'React JS',
            file: 'reactjs.json',
            icon: 'Atom',
            color: 'bg-blue-50',
            description: 'Component-based frontend library by Meta'
        },
        {
            name: 'Software Engineering',
            file: 'software-engineering.json',
            icon: 'BookOpenText',
            color: 'bg-slate-100',
            description: 'Principles, SDLC, agile, and project management'
        },
        {
            name: 'Software Testing',
            file: 'software-testing.json',
            icon: 'CheckCheck',
            color: 'bg-zinc-100',
            description: 'Test types, strategies, and automation basics'
        }
    ];

    const valueProps = [
        {
            icon: <Target className="w-8 h-8 text-blue-600" />,
            title: 'Prepare for Interviews',
            description: 'Comprehensive question banks and mock interview scenarios for each subject'
        },
        {
            icon: <FolderOpen className="w-8 h-8 text-green-600" />,
            title: 'Find Projects',
            description: 'Hands-on projects and practical assignments to strengthen your portfolio'
        },
        {
            icon: <BookOpen className="w-8 h-8 text-purple-600" />,
            title: 'Learn with Examples',
            description: 'Real-world examples and industry-relevant case studies'
        },
        {
            icon: <Code className="w-8 h-8 text-orange-600" />,
            title: 'Code Snippets',
            description: 'Ready-to-use code examples and implementation patterns'
        }
    ];
    return (
        <div>
            {/* Hero Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                                    Ace Every
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Interview</span>,
                                    One Topic at a Time
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Master HTML, JS, DBMS, OS, DSA & more — with beginner-friendly,
                                    structured content designed for interview success.
                                </p>
                            </div>

                           

                            {/* Stats */}
                            <div className="flex space-x-8 pt-4">
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">14</div>
                                    <div className="text-sm text-gray-600">Core Subjects</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">500+</div>
                                    <div className="text-sm text-gray-600">Interview Questions</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">100+</div>
                                    <div className="text-sm text-gray-600">Practice Projects</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Features Preview */}
                        <div className="relative">
                            <div className="relative z-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
                                <div className="space-y-6">
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900">Interview Prep Dashboard</h3>
                                        <div className="flex space-x-2">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Feature Cards */}
                                    <div className="space-y-4">
                                        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                                            <div className="flex items-center space-x-3">
                                                <Target className="w-5 h-5 text-blue-600" />
                                                <div>
                                                    <div className="font-semibold text-gray-900">Interview Questions</div>
                                                    <div className="text-sm text-gray-600">500+ curated questions</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-500">
                                            <div className="flex items-center space-x-3">
                                                <FolderOpen className="w-5 h-5 text-green-600" />
                                                <div>
                                                    <div className="font-semibold text-gray-900">Practice Projects</div>
                                                    <div className="text-sm text-gray-600">Build real-world applications</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-purple-500">
                                            <div className="flex items-center space-x-3">
                                                <Code className="w-5 h-5 text-purple-600" />
                                                <div>
                                                    <div className="font-semibold text-gray-900">Code Examples</div>
                                                    <div className="text-sm text-gray-600">Copy-paste ready snippets</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subjects Grid */}
            <section id="subjects" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Master Every Subject
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive coverage of all major computer science topics essential for technical interviews
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {subjects.map((subject, index) => (
                           <Link
                           key={subject.name}
                           to={`/subject/${subject.file.replace('.json', '')}`}
                           className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                         >
                           <SubjectCard subject={subject} />
                         </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* Value Props */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to Succeed
                        </h2>
                        <p className="text-xl text-gray-600">
                            Comprehensive resources designed for interview preparation and skill development
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {valueProps.map((prop, index) => (
                            <div key={prop.title} className="text-center group">
                                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                                    <div className="mb-4 flex justify-center">
                                        <div className="p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform">
                                            {prop.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{prop.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{prop.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;