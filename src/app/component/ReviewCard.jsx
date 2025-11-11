import React, { useState } from 'react'
import axios from 'axios'

const ReviewCard = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null)

  if (!data) return <div>No data loaded.</div>
  if (!Array.isArray(data) || data.length === 0)
    return <div>No reviews found.</div>

  return (
    <div className='bg-white rounded-lg shadow p-6'>
      <h2 className='text-2xl font-bold mb-6 text-blue-700 border-b pb-2'>
        Review Applications
      </h2>

      <div className='space-y-6'>
        {data.map((item, idx) => {
          let imgSrc = null
          if (item.idCard) {
            if (item.idCard.startsWith('data:image')) imgSrc = item.idCard
            else imgSrc = `data:image/jpeg;base64,${item.idCard}`
          }

          return (
            <div
              key={item._id || idx}
              className='border border-gray-200 rounded-lg p-5 bg-gray-50 hover:shadow-lg transition-shadow flex gap-8 flex-wrap items-center'
            >
              {/* Image Section */}
              <div
                className='flex-shrink-0 w-32 h-32 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition'
                onClick={() => imgSrc && setSelectedImage(imgSrc)}
              >
                {imgSrc ? (
                  <img
                    src={imgSrc}
                    alt='ID Card'
                    className='max-h-32 max-w-full object-contain'
                  />
                ) : (
                  <span className='text-gray-400 text-xs'>No image</span>
                )}
              </div>

              {/* Student Info + Button */}
              <div className='flex-1 min-w-[200px] flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                  <div className='text-lg font-semibold text-gray-800'>
                    Student Name on Aadhar Card:{' '}
                    <span className='font-normal text-gray-700'>
                      {item.studentAadharName || '-'}
                    </span>
                  </div>
                  <button
                    onClick={async () => {
                      const res = await axios.get(`/api/update-aadhar/${item.studentPhone}`)
                      if(res.data.success){
                        alert(`${item.studentAadharName} is Allowed to Review.`)
                      }else{
                        alert(`${item.studentAadharName} is not Allowed to Review.`)
                      }
                    }}
                    className='bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 text-sm transition'
                  >
                    Allow Review
                  </button>
                </div>

                <div className='text-md font-semibold text-gray-800'>
                  Phone:{' '}
                  <span className='font-normal text-gray-700'>
                    {item.studentPhone || '-'}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm'
          onClick={() => setSelectedImage(null)}
        >
          <div className='relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-4'>
            <button
              className='absolute top-2 right-2 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600 transition'
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt='Full Size Aadhar'
              className='w-full h-auto rounded-lg object-contain'
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewCard
