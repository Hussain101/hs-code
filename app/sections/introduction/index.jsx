"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useScrollTo } from "hooks";
import { useMediaQuery } from "utils";

export function WelcomeSection() {
	const ref = useRef(null);
	const introRef = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { scrollToEl } = useScrollTo();
	const isTabletUp = useMediaQuery("min-width: 768px");

	let [count, setCount] = useState(0);
	const [text] = useState([
		"deploy mission-critical full-stack applications",
		"bridge complex customer needs with production code",
		"architect scalable cloud solutions & REST APIs",
		"optimize enterprise workflows and web UX",
		"deliver rapid prototype to production deployments"
	]);

	const onClick = (e) => scrollToEl(e);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount((prev) => (prev + 1) % text.length);
		}, 2800);

		return () => clearInterval(interval);
	}, [text.length]);

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section relative py-16 md:py-28 overflow-hidden" ref={introRef}>
				{/* Fine-line grid background accent */}
				<div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

				<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
					<div className="py-2">
						{/* Monospaced Revset-Style Header Badge */}
						<div className="flex items-center gap-2 mb-6">
							<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
							<p className="font-mono text-xs font-semibold tracking-[0.14em] text-slate-400 uppercase">
								FORWARD DEPLOYED ENGINEER &bull; AVAILABLE FOR ENTERPRISE ROLES
							</p>
						</div>

						{/* Revset Typography Design System Hero Headline */}
						<div
							ref={ref}
							className="space-y-3 font-semibold tracking-[-0.038em]"
							style={{
								transform: isInView ? "none" : "translateY(20px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
							}}
						>
							{/* Strikethrough Row: - Monolithic legacy code */}
							<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-rose-500/10 border border-rose-500/20 text-slate-400 text-2xl sm:text-4xl lg:text-5xl font-semibold">
								<span className="font-mono text-rose-400 text-xl sm:text-3xl">&minus;</span>
								<span className="line-through text-slate-400">Monolithic legacy code.</span>
							</div>

							{/* Highlight Row: + High-velocity deployments */}
							<div className="flex flex-wrap items-center gap-2.5 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white pt-1 leading-tight">
								<span className="font-mono text-emerald-400 text-2xl sm:text-4xl">+</span>
								<span>Hi, I&apos;m</span>
								<span className="text-white">Hussain Siddiqui</span>
							</div>
							<div className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-200 pt-1">
								<span>Forward Deployed</span>{" "}
								<span className="px-2.5 py-0.5 rounded-md bg-emerald-500 text-black font-bold">
									Engineer
								</span>
							</div>
						</div>

						{/* Dynamic Rotating Sub-headline */}
						<div className="mt-6 h-12 relative overflow-hidden flex items-center">
							<p className="text-base md:text-xl text-slate-300 font-medium flex items-center gap-2">
								<span className="text-slate-400 font-mono">I</span>
								<span className="relative inline-block h-8 overflow-hidden">
									<span
										className="flex flex-col transition-transform duration-500 ease-out"
										style={{
											transform: `translateY(-${count * 2}rem)`
										}}
									>
										{text.map((element) => (
											<span
												key={element}
												className="h-8 leading-8 text-emerald-400 font-mono font-semibold whitespace-nowrap block"
											>
												{element}
											</span>
										))}
									</span>
								</span>
							</p>
						</div>

						{/* Description */}
						<p
							ref={ref}
							className="mt-4 mb-8 text-slate-300 text-base md:text-lg max-w-xl leading-relaxed font-normal"
							style={{
								transform: isInView ? "none" : "translateY(20px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s"
							}}
						>
							Solving high-impact engineering challenges on the frontlines. I integrate directly with clients and cross-functional teams to design, build, and deploy production-ready web and mobile applications with 3+ years of full-stack experience.
						</p>

						{/* Pill CTA Buttons */}
						<div
							ref={ref}
							className="flex flex-wrap items-center gap-4"
							style={{
								transform: isInView ? "none" : "translateY(20px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
							}}
						>
							<Link
								href="#projects"
								onClick={onClick}
								tabIndex="0"
								className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-slate-200 transition-all duration-200 shadow-md"
								aria-label="View Projects"
							>
								Explore Work
							</Link>

							<Link
								href="#contact"
								onClick={onClick}
								tabIndex="0"
								className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/5 border border-white/20 text-slate-200 font-semibold text-sm transition-all duration-200"
								aria-label="Get in Touch"
							>
								Get In Touch
							</Link>
						</div>
					</div>

					{/* Right Graphic: Revset Stacked PR Widget */}
					{isTabletUp && (
						<div className="relative">
							<div className="p-6 rounded-2xl bg-[#121418] border border-white/10 shadow-2xl space-y-4">
								<div className="flex items-center justify-between pb-3 border-b border-white/10">
									<span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
										STACKED REVISIONS (r1 &rarr; r4)
									</span>
									<span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
										+142 / -12 lines
									</span>
								</div>

								{/* Diff Cards */}
								<div className="space-y-2 font-mono text-xs">
									<div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
										<div className="flex items-center gap-2">
											<span className="text-emerald-400 font-bold">+</span>
											<span className="text-slate-200 font-semibold">#516</span>
											<span className="text-slate-400">Update RPC functions for users table</span>
										</div>
										<span className="text-emerald-400">r4</span>
									</div>

									<div className="p-3 rounded-lg bg-rose-950/20 border border-rose-500/30 flex items-center justify-between">
										<div className="flex items-center gap-2">
											<span className="text-rose-400 font-bold">&minus;</span>
											<span className="text-slate-400">#491</span>
											<span className="text-slate-500 line-through">Legacy schema column reference</span>
										</div>
										<span className="text-slate-500">r2</span>
									</div>
								</div>

								{/* Reviewer Comment box */}
								<div className="p-4 rounded-xl bg-[#16181d] border border-white/10 space-y-2">
									<div className="flex items-center justify-between text-xs">
										<span className="font-bold text-slate-200">Hussain Siddiqui</span>
										<span className="font-mono text-slate-500">Reviewed r4</span>
									</div>
									<p className="text-xs text-slate-400 leading-relaxed">
										&ldquo;Diffed against last read: all 9 unit tests passed with 90%+ code coverage.&rdquo;
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</LazyMotion>
	);
}
