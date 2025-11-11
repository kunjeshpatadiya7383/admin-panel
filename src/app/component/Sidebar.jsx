"use client";

import React, { useState } from 'react';
import { Home, School, Settings, Users, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

// Define the navigation items
const navItems = [
    { name: 'Admission', icon: Home, path: '/admission' },
    { name: 'Loans', icon: School, path: '/loan' },
    { name: 'Scholarships', icon: Users, path: '/scholarship' },
    { name: 'Reviews', icon: BarChart3, path: '/review' },
];

const Sidebar = ({ selectedSection, setSelectedSection }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const toggleSidebar = () => setIsExpanded(!isExpanded);
    return (
        <div className={`
      h-screen sticky top-0 
      ${isExpanded ? 'w-64' : 'w-20'} 
      bg-gray-800 text-white 
      flex flex-col 
      transition-all duration-300 ease-in-out
      shadow-lg
      z-20
    `}>
            {/* Header / Logo Area */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                {isExpanded && (
                    <h1 className="text-xl font-bold text-blue-400 truncate">Admin Panel</h1>
                )}
                <button
                    onClick={toggleSidebar}
                    className="p-2 rounded-full hover:bg-gray-700 transition duration-150"
                    aria-label={isExpanded ? 'Collapse Sidebar' : 'Expand Sidebar'}
                >
                    {isExpanded ? (
                        <ChevronLeft className="h-6 w-6 text-gray-400" />
                    ) : (
                        <ChevronRight className="h-6 w-6 text-gray-400" />
                    )}
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto p-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = selectedSection === item.name;

                    return (
                        <div key={item.name}>
                            <button
                                onClick={() => setSelectedSection(item.name)}
                                className={`
                flex items-center rounded-lg my-2 p-3 text-sm font-medium transition duration-200 group w-full text-left
                ${isActive
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }
              `}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                <Icon className={`
                h-6 w-6 transition duration-200
                ${isActive ? 'text-white' : 'text-blue-400 group-hover:text-white'}
                ${isExpanded ? 'mr-4' : ''}
              `} />
                                {isExpanded && (
                                    <span className="whitespace-nowrap transition-opacity duration-300">
                                        {item.name}
                                    </span>
                                )}
                            </button>
                        </div>
                    );
                })}
            </nav>

            {/* Footer / User Area (Optional, for structure) */}
            <div className="p-4 border-t border-gray-700">
                {isExpanded ? (
                    <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-semibold">
                            U
                        </div>
                        <div className="text-sm">
                            <p className="font-medium truncate">User Role</p>
                            <p className="text-gray-400 text-xs truncate">portal@aishe.gov</p>
                        </div>
                    </div>
                ) : (
                    <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-semibold mx-auto">
                        U
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;
