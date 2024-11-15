import React from 'react'

const page = () => {
  return (
    <div>
      <div className=''>
        {/* header image */}
        <div className='w-full items-center justify-center flex my-12'>
          <div className='h-[440px] w-[80%] bg-red-500'>

          </div>
        </div>
          <div className="max-w-[80%] mx-auto p-6 text-white shadow-md rounded-lg ">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Sheppard.io: Building an Intuitive Feedback Management Platform
      </h1>
      <p className="text-white font-medium mb-2">
        <span className="font-bold">Duration:</span> Ongoing (Continuously developing and improving the platform)
      </p>
      <p className="text-white mb-6">
        Sheppard.io is a feedback management platform designed to empower freelancers, business owners, and agencies to
        seamlessly collect, manage, and analyze client feedback and testimonials. The platform focuses on providing tailored solutions for capturing insights, ensuring businesses can improve client relationships and showcase positive testimonials effectively.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
        <a
          href="http://app.sheppardd.io/"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Visit Website
        </a>
        
      </div>
        {/* Responsibilities Section */}
        <div className="py-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>Design and implement core features of the feedback management platform.</li>
          <li>Ensure the platform is intuitive and user-friendly for business owners and freelancers.</li>
          <li>Develop tools for clients to easily collect and analyze feedback.</li>
          <li>Continuously improve the user experience based on client feedback and analytics.</li>
          <li>Collaborate with designers and developers to maintain a consistent and scalable UI.</li>
        </ul>
      </div>
    </div>
      </div>
    </div>
  )
}

export default page