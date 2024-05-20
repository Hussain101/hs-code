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
							My name is Hussain. I successfully graduated Technical University of Moldova, computer
							science faculty.
						</p>
						<p>
							During my university years, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field.
						</p>
						<p>So, officially, my programming journey began in 2019 as a html/css developer.</p>
						<p className="my-3.5">
							I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with WordPress.
						</p>
						<p>
							One day, I decided to try something new, and I started learning React. I was so
							excited to see how fast I can build a website with it, and how easy it is to maintain
							it. Consequently, I quickly learnt Next.js, furthermore I also learn nodejs, expressjs
							and database like mongodb, postgres and also learnt tools like firebase and supabase.
						</p>
						<p className="my-3.5">
							In July 2023, I was hired as a Full Stack Developer at a company named Digitalux. My
							role involves creating and maintaining web applications using technologies such as
							React, Next, Node.js, and MongoDB. I collaborate with a talented team to develop scalable
							solutions, ensuring optimal performance and enhancing user experiences through
							innovative features and robust backend services.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
