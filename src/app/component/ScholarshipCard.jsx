import React from 'react'

const ScholarshipCard = ({ data }) => {
  console.log(data)
  if (!data) return <div>No data loaded.</div>
  if (!Array.isArray(data) || data.length === 0)
    return <div>No scholarship applications found.</div>
  return (
    <div className='bg-white rounded-2xl shadow-lg p-8'>
      <h2 className='text-2xl font-semibold mb-8 text-blue-700 border-b pb-3'>
        Scholarship Applications
      </h2>

      <div className='space-y-8'>
        {data.map((item, idx) => (
          <div
            key={item._id || idx}
            className='border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md hover:border-blue-400 transition-all duration-200'
          >
            {/* Student Info */}
            <div className='flex flex-wrap justify-between gap-8 mb-4'>
              <div>
                <div className='font-semibold text-gray-700 text-lg'>
                  {item.scholarship_data.firstName}{' '}
                  {item.scholarship_data.lastName}
                </div>
              
                <div className='text-sm text-gray-600'>
                  Gender: {item.scholarship_data.gender || '-'}
                </div>
                <div className='text-sm text-gray-600'>
                  Category: {item.scholarship_data.category || '-'}
                </div>
              </div>

              <div>
                <div className='font-semibold text-gray-700 text-lg'>
                  Contact
                </div>
                <div className='text-sm text-gray-600'>
                  Email: {item.scholarship_data.email || '-'}
                </div>
                <div className='text-sm text-gray-600'>
                  Phone: {item.scholarship_data.phone || '-'}
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className='border-gray-200 my-4' />

            {/* College & Academic Info */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-4'>
              <div>
                <div className='font-semibold text-gray-700 text-lg'>
                  College
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.college || '-'}
                </div>
                <div className='font-semibold text-gray-700 mt-2'>Course</div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.course || '-'}
                </div>
                <div className='font-semibold text-gray-700 mt-2'>
                  City / State
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.city || '-'},{' '}
                  {item.scholarship_data.state || '-'}
                </div>
              </div>

              <div>
                <div className='font-semibold text-gray-700 text-lg'>
                  Current Year
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.year || '-'}
                </div>
                <div className='font-semibold text-gray-700 mt-2'>
                  Percentage / CGPA
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.percentage || '-'}
                </div>
                <div className='font-semibold text-gray-700 mt-2'>
                  Qualification
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.qualification || '-'}
                </div>
              </div>

              <div>
                <div className='font-semibold text-gray-700 text-lg'>
                  Future Course
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.futureCourse || '-'}
                </div>
                <div className='font-semibold text-gray-700 mt-2'>
                  Future Year
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.futureYear || '-'}
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className='border-gray-200 my-4' />

            {/* Family Details */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div>
                <div className='font-semibold text-gray-700 text-lg'>
                  Annual Family Income
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.annualFamilyIncome || '-'}
                </div>
              </div>
              <div>
                <div className='font-semibold text-gray-700 text-lg'>
                  BPL Status
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.bplStatus || '-'}
                </div>
              </div>
              <div>
                <div className='font-semibold text-gray-700 text-lg'>
                  Disability Status
                </div>
                <div className='text-gray-900 text-base'>
                  {item.scholarship_data.disabilityStatus || '-'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ScholarshipCard
