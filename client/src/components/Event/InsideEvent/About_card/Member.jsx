import React from 'react'
import Individual_member from './Individual_member.jsx'

const Member = () => {
  return (
    <div>
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Our Members
          </p>
        </div>
      </div>

      <Individual_member />
      <Individual_member />
      <Individual_member />
      <Individual_member />
      <Individual_member />
    </div>
  );
}

export default Member