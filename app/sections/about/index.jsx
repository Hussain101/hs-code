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
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
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
						<p>
							A seasoned Computer Engineer with over two years of experience as a Full Stack Web Developer, specializing
in React.js, Node.js, Next.js, and Angular.js. Proficient in creating dynamic, responsive web applications with
a strong understanding of both front-end and back-end technologies. Demonstrated expertise in UI/UX design
and server-side development, building robust, scalable solutions. Skilled in problem-solving, debugging, and
optimizing code for performance. Passionate about staying updated with industry trends to deliver cuttingedge applications. Committed to collaborative development and effective communication within crossfunctional teams
						</p>
						
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
