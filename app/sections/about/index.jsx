"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-8 pb-12 w-full flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p className="text-slate-300 text-lg leading-relaxed font-normal">
							Computer Engineer & Full Stack Engineer with 3+ years of experience building, testing, and shipping scalable web & mobile applications using React.js, Next.js, Node.js, Angular, TypeScript, and AI tools. Skilled in owning feature slices end-to-end — from clarifying scope with product stakeholders to backend implementation, UI/UX optimization, QA unit testing (Jest/Vitest), and automated deployment pipelines.
						</p>
						
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
