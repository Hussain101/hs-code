"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

const TimeLineData = [
	{
		year: "July 2023 - Present",
		role: "Full Stack Engineer | Digitalux — Lahore",
		text: "Accelerated full-cycle delivery (design → development → unit testing) using Claude & AI coding tools. Developed full-stack apps with React, Node.js, PostgreSQL & Next.js. Automated CI/CD with Docker and owned QA lifecycle with Jest/Vitest."
	},
	{
		year: "July 2022 - July 2023",
		role: "MERN Stack Developer | Digitalux — Remote",
		text: "Built full-stack MERN applications with RESTful APIs, MongoDB schemas, JWT auth, and form validation in Agile standups."
	},
	{
		year: "2019 - 2023",
		role: "BS Computer Engineering | UET Taxila",
		text: "Graduated with 3.18/4.0 GPA. Specialized in computer engineering, software design patterns, and full-stack software architecture."
	}
];

export function TimeLine() {
	const carouselRef = useRef(null);
	const isInView = useInView(carouselRef, { once: true });

	const stats = [
		{ number: "3+", label: "Years Engineering Exp" },
		{ number: "90%+", label: "Test Coverage Achieved" },
		{ number: "20+", label: "Tech Stack & AI Tools" },
		{ number: "100%", label: "End-to-End Ownership" }
	];

	return (
		<LazyMotion features={domAnimation}>
			<div className="space-y-12">
				{/* Key Stats Counter Highlights */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
					{stats.map((stat, idx) => (
						<div
							key={idx}
							className="p-5 rounded-2xl glass-card text-center hover:scale-[1.03] transition-all"
						>
							<div className="text-3xl md:text-4xl font-extrabold text-white font-mono">
								{stat.number}
							</div>
							<div className="text-xs md:text-sm font-medium text-slate-400 mt-1">
								{stat.label}
							</div>
						</div>
					))}
				</div>

				{/* Visual Timeline */}
				<div ref={carouselRef} className="relative border-l border-indigo-500/30 ml-4 md:ml-8 pl-6 space-y-10">
					{TimeLineData.map((item, index) => (
						<div
							key={index}
							className="relative group"
							style={{
								transform: isInView ? "none" : "translateX(-30px)",
								opacity: isInView ? 1 : 0,
								transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`
							}}
						>
							{/* Glowing Bullet Node */}
							<div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900 group-hover:scale-125 group-hover:bg-pink-500 transition-all duration-300 shadow-md shadow-indigo-500/50" />

							<div className="p-6 rounded-2xl glass-panel hover:border-indigo-500/40 transition-all">
								<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
									{item.year}
								</span>
								<h4 className="text-xl font-bold text-slate-100 mb-1">{item.role}</h4>
								<p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</LazyMotion>
	);
}
