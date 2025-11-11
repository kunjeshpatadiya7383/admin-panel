import React from 'react'

const AdmissionCard = ({ data }) => {
  if (!data) return <div>No data loaded.</div>
  if (!Array.isArray(data) || data.length === 0)
    return <div>No admission applications found.</div>
  return (
    <div className='bg-white rounded-2xl shadow-lg p-8'>
      <h2 className='text-2xl font-semibold mb-8 text-blue-700 border-b pb-3'>
        Admission Applications
      </h2>

      <div className='space-y-8'>
        {data.map((item, idx) => {
          const s = item.StudentData || {}
          const edu = s.educationalQualification || {}

          return (
            <div
              key={item._id || idx}
              className='border border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-md hover:border-blue-400 transition-all duration-200'>
              {/* Header Section */}
              <div className='mb-2'>
                <div className='font-semibold text-gray-800 text-xl'>
                  {s.firstName} {s.lastName}
                </div>
                <div className='text-sm text-gray-500 text-lg'>
                  <p>Email: {s.email}</p>
                  <p>Phone: {s.phoneNumber}</p>
                </div>
                <div className='mt-1'>
                  <div className='font-semibold text-gray-700'>
                    City / State
                  </div>
                  <div className='text-gray-800'>
                    {s.city || '-'}, {s.state || '-'}
                  </div>
                </div>
              </div>

              <hr className='border-gray-200 my-2' />

              {/* Application Info */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div>
                  <div className='font-semibold text-gray-700'>
                    Applied Specialization
                  </div>
                  <div className='text-gray-800'>
                    {s.applyForSpecialization || '-'}
                  </div>
                </div>

                <div>
                  <div className='font-semibold text-gray-700'>
                    Applied Program
                  </div>
                  <div className='text-gray-800'>{s.applyForCourse || '-'}</div>
                </div>

                <div>
                  <div className='font-semibold text-gray-700'>
                    Qualification
                  </div>
                  <div className='text-gray-800'>{s.qualification || '-'}</div>
                </div>
              </div>

              <hr className='border-gray-200 my-2' />

              {/* Qualification Details */}
              <h3 className='font-semibold text-gray-700 text-xl mb-1'>
                Qualification Details
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div>
                  <div className='font-semibold text-gray-700'>Course</div>
                  <div className='text-gray-800'>{edu.courseName || '-'}</div>
                </div>

                <div>
                  <div className='font-semibold text-gray-700'>
                    Specialization
                  </div>
                  <div className='text-gray-800'>
                    {edu.specialization || s.specialization || '-'}
                  </div>
                </div>

                <div>
                  <div className='font-semibold text-gray-700'>College</div>
                  <div className='text-gray-800'>{edu.collegeName || '-'}</div>
                </div>

                <div>
                  <div className='font-semibold text-gray-700'>
                    Percentage / CGPA
                  </div>
                  <div className='text-gray-800'>
                    {edu.percentage || s.percentage || '-'}
                  </div>
                </div>

                <div>
                  <div className='font-semibold text-gray-700'>
                    Year of Completion
                  </div>
                  <div className='text-gray-800'>
                    {edu.yearOfCompletion || '-'}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdmissionCard
