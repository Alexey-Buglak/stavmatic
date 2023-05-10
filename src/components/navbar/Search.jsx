import React from 'react';

const Search = () => {
  return (
    <div className='cursor-pointer mr-4 flex items-center gap-x-1'>
      <span className='sm:hidden'>Искать </span>
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.21014 16.7525C3.04099 15.6353 0.56683 11.35 1.68395 7.18082C2.80107 3.01168 7.08644 0.537518 11.2556 1.65464C15.4247 2.77176 17.8989 7.05713 16.7818 11.2263C15.6647 15.3954 11.3793 17.8696 7.21014 16.7525Z"
          stroke="#929EAA"
          strokeWidth="1.5"
        />
        <path
          d="M13.5898 15.5782L18.9997 22.7911"
          stroke="#929EAA"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  )
};

export default Search;