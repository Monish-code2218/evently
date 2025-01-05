import React from 'react'

const Footer = () => {
  return (
    <footer class=" bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 ">
      <div className=" text-sm sm:text-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        <p className='absolute  right-0 '>2025 Evently. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer