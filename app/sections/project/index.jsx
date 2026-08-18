import { useState } from "react";
import { HeadingDivider } from "components";
import { domAnimation, LazyMotion, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { BsGithub, BsGlobe, BsArrowRight } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export function ProjectsSection() {
	const [activeCategory, setActiveCategory] = useState("All");
	const [selectedProject, setSelectedProject] = useState(null);

	const categories = ["All", "Full Stack / AI", "SaaS & Analytics", "GIS & Energy"];

	const projects = [
		{
			id: 1,
			name: "THE HOCKEY REVIEW",
			category: "SaaS & Analytics",
			image: "/assets/images/hockey.png",
			link: "https://www.thehockeyreview.com/",
			github: "https://github.com",
			desc: "Mentor Scheduling & Analytics Platform (Lead Developer). Built a Next.js platform with Ant Design UI, designed RESTful APIs and database architecture using Strapi backend with AWS RDS.",
			tags: ["Next.js", "Strapi CMS", "AWS RDS", "Ant Design", "Cal.com API", "Stripe"],
			caseStudy: {
				challenge: "Designing role-based dashboards for super admin, team owners, and advisors while handling complex appointment bookings.",
				solution: "Integrated Cal.com API for advisor meeting management with automated commission tracking, Stripe payments, and 1-to-1 meeting coordination.",
				impact: "Streamlined sports mentor bookings and automated commission tracking across all user roles."
			}
		},
		{
			id: 2,
			name: "FLOWTOPIA",
			category: "Full Stack / AI",
			image: "/assets/images/flowtopia.png",
			link: "https://www.flowtopia.co/",
			github: "https://github.com",
			desc: "AI-Powered Trading Platform (Lead Developer). Built a responsive trading platform UI with React and Mantine UI; integrated OpenAI API for AI-driven market insights.",
			tags: ["React", "Mantine UI", "OpenAI API", "Jest", "Cypress"],
			caseStudy: {
				challenge: "Delivering real-time automated trading recommendations while maintaining strict code coverage and workflow reliability.",
				solution: "Integrated OpenAI API for AI-driven market insights and wrote Jest unit tests + Cypress E2E testing to validate critical trading workflows.",
				impact: "Achieved 90%+ code coverage on core modules and validated critical real-time trading actions."
			}
		},
		{
			id: 3,
			name: "NATPOWER DEVELOPMENT",
			category: "GIS & Energy",
			image: "/assets/images/natview.png",
			link: "https://www.linkedin.com/company/natpower-development-limited-uk/",
			github: "https://github.com",
			desc: "NatView, Gantt Planner & Financial Platform. Interactive GIS mapping, spatial visualization, and Gantt timeline planners for renewable energy site acquisition across UK/USA.",
			tags: ["React", "GIS Mapping", "Gantt Timeline", "Invoice Scanner API", "Batch Processing"],
			caseStudy: {
				challenge: "Tracking large-scale site acquisitions, spatial visualization across regions, and handling batch invoice processing.",
				solution: "Developed interactive GIS mapping tools alongside an automated Budget & Invoice approval platform with Invoice Scanner APIs.",
				impact: "Streamlined renewable energy project tracking and automated financial approval workflows across UK/USA regions."
			}
		}
	];

	const filteredProjects = activeCategory === "All"
		? projects
		: projects.filter(p => p.category === activeCategory);

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section py-20 relative">
				<HeadingDivider title="Featured Projects" />

				<p className="text-slate-400 text-lg mt-4 max-w-2xl">
					Explore a curated selection of full-stack web applications, custom UI systems, and web platforms built with modern technology.
				</p>

				{/* Category Filter Tabs */}
				<div className="flex flex-wrap gap-2 md:gap-4 mt-8 mb-12">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
								activeCategory === cat
									? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
									: "bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-700/60"
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((item) => (
						<div
							key={item.id}
							className="glass-panel rounded-2xl overflow-hidden group hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between"
						>
							<div>
								{/* Image Preview Container */}
								<div className="relative w-full h-48 bg-slate-900 overflow-hidden">
									<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />
									<Image
										src={item.image}
										alt={item.name}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-700"
									/>
									<span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-indigo-400 border border-indigo-500/30">
										{item.category}
									</span>
								</div>

								{/* Card Content */}
								<div className="p-6">
									<h3 className="text-2xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
										{item.name}
									</h3>
									<p className="text-slate-400 text-sm mt-3 line-clamp-3 leading-relaxed">
										{item.desc}
									</p>

									{/* Tech Pills */}
									<div className="flex flex-wrap gap-2 mt-4">
										{item.tags.map((tag) => (
											<span
												key={tag}
												className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-indigo-300 border border-slate-700"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>

							{/* Actions Bar */}
							<div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-800/80">
								<div className="flex items-center gap-3">
									<a
										href={item.link}
										target="_blank"
										rel="noopener noreferrer"
										className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
										title="Live Demo"
									>
										<BsGlobe className="text-base" /> Visit Platform
									</a>
								</div>

								<button
									onClick={() => setSelectedProject(item)}
									className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 group/btn"
								>
									Case Study <BsArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Case Study Modal */}
				<AnimatePresence>
					{selectedProject && (
						<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								className="relative w-full max-w-2xl p-6 md:p-8 rounded-3xl glass-panel border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto"
							>
								<button
									onClick={() => setSelectedProject(null)}
									className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
								>
									<IoClose className="text-xl" />
								</button>

								<span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
									{selectedProject.category} Case Study
								</span>

								<h3 className="text-3xl font-extrabold text-slate-100 mt-3">
									{selectedProject.name}
								</h3>

								<p className="text-slate-300 mt-4 leading-relaxed">
									{selectedProject.desc}
								</p>

								<div className="my-6 space-y-4">
									<div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
										<h4 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">The Challenge</h4>
										<p className="text-slate-300 text-sm mt-1">{selectedProject.caseStudy.challenge}</p>
									</div>

									<div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
										<h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider">The Solution</h4>
										<p className="text-slate-300 text-sm mt-1">{selectedProject.caseStudy.solution}</p>
									</div>

									<div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
										<h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Key Impact</h4>
										<p className="text-slate-300 text-sm mt-1">{selectedProject.caseStudy.impact}</p>
									</div>
								</div>

								<div className="flex items-center gap-4 mt-8">
									<a
										href={selectedProject.link}
										target="_blank"
										rel="noopener noreferrer"
										className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-2 transition-colors"
									>
										<BsGlobe /> Visit Live Platform
									</a>
								</div>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
			</section>
		</LazyMotion>
	);
}
