"use client";
import React, { useState } from 'react'
import SearchBar from './component/SearchBar'
import Sidebar from './component/Sidebar'
import AdmissionCard from './component/AdmissionCard'
import LoanCard from './component/LoanCard'
import ReviewCard from './component/ReviewCard'
import ScholarshipCard from './component/ScholarshipCard'

const cardOptions = {
  Admission: AdmissionCard,
  Loans: LoanCard,
  Scholarships: ScholarshipCard,
  Reviews: ReviewCard,
}

const page = () => {
  
  const [selectedSection, setSelectedSection] = useState('Admission');
  const [admissionData, setAdmissionData] = useState(null);
  const [loanData, setLoanData] = useState(null);
  const [scholarshipData, setScholarshipData] = useState(null);
  const [reviewData, setReviewData] = useState(null);

  // Compose Card props
 let CardComponent = null;
  let cardProps = {};
  if (selectedSection === 'Admission') {
    CardComponent = AdmissionCard;
    cardProps = { data: admissionData };
  } else if (selectedSection === 'Loans') {
    CardComponent = LoanCard;
    cardProps = { data: loanData };
  } else if (selectedSection === 'Scholarships') {
    CardComponent = ScholarshipCard;
    cardProps = { data: scholarshipData };
  } else if (selectedSection === 'Reviews') {
    CardComponent = ReviewCard;
    cardProps = { data: reviewData };
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between bg-white shadow px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800">
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm">Welcome, Admin</span>
            <div className="h-8 w-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
              U
            </div>
          </div>
        </header>

        {/* Main Content Section */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">
            <SearchBar
              setAdmissionData={setAdmissionData}
              setLoanData={setLoanData}
              setScholarshipData={setScholarshipData}
              setReviewData={setReviewData}
            />
            <div className="mt-8">
              {CardComponent && <CardComponent {...cardProps} />}
            </div>
          </div>
        </main>


      </div>
    </div>
  )
}

export default page
