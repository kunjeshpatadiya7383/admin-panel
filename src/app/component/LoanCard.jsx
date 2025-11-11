import React from 'react'

const LoanCard = ({ data }) => {
  if (!data) return <div>No data loaded.</div>
  if (!Array.isArray(data) || data.length === 0)
    return <div>No loan applications found.</div>
  return (
    <div className='bg-white rounded-2xl shadow-lg p-8'>
      <h2 className='text-2xl font-semibold mb-8 text-blue-700 border-b pb-3'>
        Loan Applications
      </h2>

      <div className='space-y-8'>
        {data.map((item, idx) => (
          <div
            key={item._id || idx}
            className='border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md hover:border-blue-400 transition-all duration-200'
          >
            {/* Applicant Header */}
            <div className='flex flex-wrap justify-between items-start mb-4'>
              <div>
                <div className='text-lg font-semibold text-gray-900'>
                  {item.firstName} {item.lastName}
                </div>
                <div className='text-sm text-gray-500'>
                  Category: {item.category || '-'} • DOB:{' '}
                  {item.dateOfBirth || '-'} • {item.gender || '-'}
                </div>
              </div>
              <div className='bg-blue-100 text-blue-700 text-xs font-medium px-4 py-1 rounded-full mt-1'>
              Applied for {item.program || 'Program N/A'}
              </div>
            </div>

            {/* Divider */}
            <hr className='border-gray-200 my-4' />

            {/* Contact & Institution */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div>
                <div className='font-semibold text-gray-700 mb-1'>Contact</div>
                <div className='text-sm text-gray-600'>
                  <p>Email: {item.email || '-'}</p>
                  <p>Mobile: {item.mobileNumber || '-'}</p>
                  <p>Address: {item.permanentAddress || '-'}</p>
                </div>
              </div>

              <div>
                <div className='font-semibold text-gray-700 mb-1'>
                  University / College
                </div>
                <div className='text-sm text-gray-600'>
                  <p>{item.university || '-'}</p>
                  <p>AISHE: {item.aishe || '-'}</p>
                  <p>
                    {item.state || '-'}, {item.city || '-'}
                  </p>
                </div>
              </div>
            </div>

            {/* Program & Course */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div>
                <div className='font-semibold text-gray-700 mb-1'>
                  Program Details
                </div>
                <div className='text-sm text-gray-600 space-y-1'>
                  <p>Program: {item.program || '-'}</p>
                  <p>Specialization: {item.specialization || '-'}</p>
                  <p>Course Type: {item.courseType || '-'}</p>
                  <p>Current Year: {item.currentYear || '-'}</p>
                </div>
              </div>

              <div>
                <div className='font-semibold text-gray-700 mb-1'>
                  Financial Information
                </div>
                <div className='text-sm text-gray-600 space-y-1'>
                  <p>
                    Loan Provider:{' '}
                    <span className='font-medium text-gray-800'>
                      {item.loanProvider || '-'}
                    </span>
                  </p>
                  <p>
                    Required Amount:{' '}
                    <span className='font-medium text-green-700'>
                      {item.requiredAmount || '-'} INR
                    </span>
                  </p>
                  <p>Family Annual Income: {item.familyAnnualIncome || '-'}</p>
                  <p>Disability Status: {item.disabilityStatus || '-'}</p>
                  <p>Scholarship: {item.scholarship || '-'}</p>
                </div>
              </div>
            </div>

            {/* Co-Applicant Info */}
            <div className='bg-white rounded-lg p-4 border border-gray-100'>
              <div className='font-semibold text-gray-800 mb-2 text-lg'>
                Co-Applicant Information
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-700'>
                <p>
                  <span className='font-medium'>Name:</span>{' '}
                  {item.coApplicantName || '-'}
                </p>
                <p>
                  <span className='font-medium'>Relation:</span>{' '}
                  {item.coApplicantRelation || item.coApplicantrelation || '-'}
                </p>
                <p>
                  <span className='font-medium'>Occupation:</span>{' '}
                  {item.coApplicantOccupation || '-'}
                </p>
                <p>
                  <span className='font-medium'>Monthly Income:</span>{' '}
                  {item.coApplicantMonthlyIncome || '-'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoanCard
