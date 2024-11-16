"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = () => {
	const [activeFeature, setActiveFeature] = useState(0);
	const [feature, setFeature] = useState(null);

	useEffect(() => {
		const fetchFeature = async () => {
			// Fetch the JSON file
			const res = await fetch("/data.json");
			const data = await res.json();

			// Find the feature by ID (using optional chaining for safe access)
			const foundFeature = data?.find((item) => item.id === id);

			// Set the feature (or default to a not-found message)
			setFeature(foundFeature ?? { message: "Feature not found" });
		};

		fetchFeature();
	}, []);
	const challenges = [
		{
			title: "Disorganized Feedback Management",
			description:
				"Users faced difficulties consolidating feedback from multiple sources, making it hard to track and utilize client testimonials effectively."
		},
		{
			title: "Inefficient Feedback Collection",
			description:
				"Gathering feedback, especially in video format, was time-consuming and required multiple tools, adding complexity to the process."
		},
		{
			title: "Limited Integration Capabilities",
			description:
				"Importing feedback from external sources like emails, social media, or other platforms was a manual process, leading to data silos and missed insights."
		},
		{
			title: "Lack of Customization for Display",
			description:
				"Importing feedback from external sources like emails, social media, or other platforms was a manual process, leading to data silos and missed insights."
		}
	];

	const responsibility = [
		"Design and implement core features of the feedback management platform.",
		"Ensure the platform is intuitive and user-friendly for business owners and freelancers.",
		"Develop tools for clients to easily collect and analyze feedback.",
		"Continuously improve the user experience based on client feedback and analytics.",
		"Collaborate with designers and developers to maintain a consistent and scalable UI."
	];

	const features = [
		{
			title: "Feedback Management",
			description:
				"Gathering feedback, especially in video format, was time-consuming and required multiple tools, adding complexity to the process."
		},
		{ title: "Customizable Forms", description: "afadsfas" },
		{ title: "Multiple Project Management", description: "asdfasd" },
		{ title: "Import Feedback", description: "asfasdf" },
		{ title: "Notification System", description: "adsfasd" },
		{ title: "Custom Branding", description: "fasdfasd" },
		{ title: "Display Widgets", description: "asdfasdf" },
		{ title: "AI Analyzer", description: "fsdafasdfasf" }
	];
	return (
		<div>
			<div className="">
				{/* header image */}
				<div className="w-full items-center justify-center flex my-12">
					<div className="h-[440px] w-full md:w-[80%] bg-red-500"></div>
				</div>
				<div className="md:max-w-[80%] mx-auto p-6 text-white shadow-md rounded-lg ">
					<h1 className="text-2xl md:text-3xl font-bold mb-4">
						Sheppard.io: Building an Intuitive Feedback Management Platform
					</h1>
					<p className="text-white font-medium mb-2">
						<span className="font-bold">Duration:</span> Ongoing (Continuously developing and
						improving the platform)
					</p>
					<p className="text-white mb-6">
						Sheppard.io is a feedback management platform designed to empower freelancers, business
						owners, and agencies to seamlessly collect, manage, and analyze client feedback and
						testimonials. The platform focuses on providing tailored solutions for capturing
						insights, ensuring businesses can improve client relationships and showcase positive
						testimonials effectively.
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
					<div className="py-4">
						<h2 className="text-xl font-semibold mb-4">Responsibilities</h2>
						<ul className="list-disc list-inside text-white space-y-2">
							{responsibility.map((responsibility, index) => (
								<li key={index}>{responsibility}</li>
							))}
						</ul>
					</div>
					{/* challenges */}
					<section className=" py-12  md:px-0 ">
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
					{/* //main functionalities of the project/ */}
					<section className=" py-12 md:px-0">
						<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Left Side */}
							<div>
								<h2 className="text-2xl md:text-4xl font-bold mb-6">
									Sheppard.io Features
									<br />
									Powered by Our Expertise
								</h2>
								<ul className="space-y-4">
									{features.map((feature, index) => (
										<li
											key={index}
											className={`flex justify-between items-start cursor-pointer ${
												activeFeature === index ? "text-white font-semibold" : "text-gray-300"
											}`}
											onClick={() => setActiveFeature(index)}
										>
											<div className="flex-grow">
												<p className="text-lg">{feature.title}</p>
												{activeFeature === index && feature.description && (
													<p className="text-gray-300 mt-2 text-sm">{feature.description}</p>
												)}
											</div>
											<span className="text-gray-400 text-xl">
												{activeFeature === index ? "-" : ">"}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Right Side */}
							<div className="flex items-center justify-center">
								<div className="w-full h-full bg-gray-100 rounded-lg shadow-lg p-4">
									<img
										src="/path-to-image.jpg"
										alt="Feature Visualization"
										className="rounded-lg w-full h-auto"
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default page;
