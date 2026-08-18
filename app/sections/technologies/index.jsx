import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TECHNOLOGIES } from "../../../constants";

export function TechnologiesSection() {
	const textRef = useRef(null);
	const stackRef = useRef(null);
	const isTextInView = useInView(textRef, { once: true });
	const isStackInView = useInView(stackRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="tech" className="section py-20 relative">
				<HeadingDivider title="Tech Stack & Skills" />
				<p
					ref={textRef}
					tabIndex="0"
					className="mt-4 mb-12 text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed"
					style={{
						transform: isTextInView ? "none" : "translateY(20px)",
						opacity: isTextInView ? 1 : 0,
						transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
					}}
				>
					A comprehensive toolkit of modern frameworks, libraries, databases, and development tools I leverage to engineer robust end-to-end digital solutions.
				</p>

				{!!TECHNOLOGIES.length && (
					<div ref={stackRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{TECHNOLOGIES.map((tech, index) => {
							return (
								<div
									key={tech.category}
									className="p-6 rounded-2xl glass-panel hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
									style={{
										transform: isStackInView
											? "none"
											: `translateY(40px)`,
										opacity: isStackInView ? 1 : 0,
										transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
									}}
								>
									<div>
										<div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800">
											<h3 tabIndex="0" className="text-xl font-bold text-slate-100">
												{tech.category}
											</h3>
											<span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
												{tech.items.length} Skills
											</span>
										</div>

										<div className="grid grid-cols-2 gap-4">
											{tech.items.map((item) => (
												<div
													key={item.name}
													className="group p-3 rounded-xl bg-slate-800/40 hover:bg-indigo-950/40 border border-slate-700/50 hover:border-indigo-500/40 transition-all flex flex-col items-center justify-center text-center gap-2 cursor-pointer"
												>
													<span className="text-3xl text-indigo-400 group-hover:scale-110 group-hover:text-pink-400 transition-transform duration-300">
														{item.icon}
													</span>
													<span className="text-xs font-medium text-slate-300 group-hover:text-white">
														{item.name}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</section>
		</LazyMotion>
	);
}
