"use client";
import React, { useState } from 'react';
import { Search } from 'lucide-react'; // Using lucide-react for a modern icon
import axios from 'axios'


const SearchBar = ({ setAdmissionData, setLoanData, setReviewData, setScholarshipData, onSearched }) => {
    const [aisheCode, setAisheCode] = useState('U-0825');
    const [isSearching, setIsSearching] = useState(false);
    const [lastSubmittedCode, setLastSubmittedCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (aisheCode.trim() === '') {
            console.error('AISHE Code cannot be empty.');
            return;
        }
        setIsSearching(true);
        setLastSubmittedCode(aisheCode);
        try {
            const scholarshipData = await axios.get(`api/get-scholarship-applications?aisheCode=${aisheCode}`);
            const admissionData = await axios.get(`api/get-admission-applications?aisheCode=${aisheCode}`);
            const loanData = await axios.get(`api/get-loan-applications?aisheCode=${aisheCode}`);
            const reviewData = await axios.get(`api/get-review-applications?aisheCode=${aisheCode}`);
            setScholarshipData(scholarshipData.data.data);
            setAdmissionData(admissionData.data.data);
            setLoanData(loanData.data.data);
            setReviewData(reviewData.data.data);
            if (onSearched) onSearched();
        } catch (error) {
            console.error(error);
        }
        setIsSearching(false);
    };

    return (
        <div className="bg-gray-50 flex items-start justify-center p-2 sm:p-4">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
                    Admin Panel MEDUIndia
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl border border-gray-100 transition-shadow duration-300 hover:shadow-3xl"
                >
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out text-gray-800 text-base shadow-sm"
                                placeholder="Add AisheCode for universitty"
                                value={aisheCode}
                                onChange={(e) => setAisheCode(e.target.value)}
                                required
                                disabled={isSearching}
                                aria-label="AISHE Code Input"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center gap-2 flex-shrink-0 disabled:bg-blue-400 disabled:cursor-not-allowed"
                            disabled={isSearching || aisheCode.trim() === ''}
                            aria-live="polite"
                        >
                            {isSearching ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Searching...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SearchBar;
