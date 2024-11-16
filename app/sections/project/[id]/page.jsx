import Image from 'next/image'
import React from 'react'

const page = () => {
  const challenges = [
    {
      title: 'Disorganized Feedback Management',
      description:
        'Users faced difficulties consolidating feedback from multiple sources, making it hard to track and utilize client testimonials effectively.',
    },
    {
      title: 'Inefficient Feedback Collection',
      description:
        'Gathering feedback, especially in video format, was time-consuming and required multiple tools, adding complexity to the process.',
    },
    {
      title: 'Limited Integration Capabilities',
      description:
        'Importing feedback from external sources like emails, social media, or other platforms was a manual process, leading to data silos and missed insights.',
    },
    {
      title: 'Lack of Customization for Display',
      description:
        'Importing feedback from external sources like emails, social media, or other platforms was a manual process, leading to data silos and missed insights.',
    },
  ];
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
        <div className="py-4 ">
        <h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>Design and implement core features of the feedback management platform.</li>
          <li>Ensure the platform is intuitive and user-friendly for business owners and freelancers.</li>
          <li>Develop tools for clients to easily collect and analyze feedback.</li>
          <li>Continuously improve the user experience based on client feedback and analytics.</li>
          <li>Collaborate with designers and developers to maintain a consistent and scalable UI.</li>
        </ul>
      </div>
      {/* challenges */}
    <section className=" py-12 px-6 md:px-0 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-slate-200">The Challenge.</span>
          </h2>
          <ul className="space-y-6">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start space-x-4">
                <span className="text-blue-600 text-xl font-bold">&#10003;</span>
                <div>
                  <h3 className="font-semibold">{challenge.title}</h3>
                  <p className="text-gray-200">{challenge.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content */}
        <div className="mt-8 md:mt-0 bg-yellow-400 md:ml-12 md:w-1/2">
          <Image
            src="/path-to-image.jpg"
            alt="Man overwhelmed with notifications"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    </div>
  
      </div>
    </div>
  )
}

export default page