"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function TechBackground() {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Parallax scroll transforms for background layers
	const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
	const layer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const layer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
	const rotateGrid = useTransform(scrollYProgress, [0, 1], [0, 15]);

	const codeSnippets = [
		"const fde = new Engineer({ mode: 'forward-deployed' });",
		"await deployToProduction({ ci_cd: true, docker: true });",
		"const ai = new LangChain({ model: 'gpt-4o' });",
		"SELECT * FROM metrics WHERE uptime >= 99.9;",
		"const pipeline = jest.runTests({ coverage: '90%' });",
		"git commit -m 'feat: enterprise scalability'",
		"curl -X POST https://api.digitalux.dev/v1/deploy"
	];

	if (!mounted) return null;

	return (
		<div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
			{/* Parallax Layer 1: Futuristic Matrix Tech Grid */}
			<motion.div
				style={{ y: layer1Y, rotate: rotateGrid }}
				className="absolute -inset-20 opacity-20 bg-[linear-gradient(to_right,#6366f115_1px,transparent_1px),linear-gradient(to_bottom,#6366f115_1px,transparent_1px)] bg-[size:4rem_4rem]"
			/>

			{/* Parallax Layer 2: Floating Digital Tech Nodes & Floating Particles */}
			<motion.div style={{ y: layer2Y }} className="absolute inset-0">
				<div className="absolute top-[10%] left-[8%] w-72 h-72 rounded-full bg-indigo-600/15 blur-[120px] animate-pulse" />
				<div className="absolute top-[40%] right-[5%] w-96 h-96 rounded-full bg-purple-600/15 blur-[140px]" />
				<div className="absolute top-[75%] left-[20%] w-80 h-80 rounded-full bg-cyan-500/15 blur-[130px]" />

				{/* Pulsing Connected Tech Nodes */}
				<div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-indigo-400 animate-ping" />
				<div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-pink-400 animate-pulse" />
				<div className="absolute top-2/3 left-1/3 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
				<div className="absolute top-3/4 right-1/3 w-4 h-4 rounded-full bg-purple-400 animate-pulse" />
			</motion.div>

			{/* Parallax Layer 3: Floating Animated Tech Code Streams */}
			<motion.div style={{ y: layer3Y }} className="absolute inset-0 flex flex-col justify-around opacity-15 font-mono text-xs text-indigo-300 select-none">
				{codeSnippets.map((code, idx) => (
					<motion.div
						key={idx}
						initial={{ x: idx % 2 === 0 ? "-20%" : "20%" }}
						animate={{ x: idx % 2 === 0 ? "20%" : "-20%" }}
						transition={{
							repeat: Infinity,
							repeatType: "reverse",
							duration: 15 + idx * 3,
							ease: "easeInOut"
						}}
						className="whitespace-nowrap px-8 text-indigo-400/80 tracking-widest font-semibold"
					>
						{code}
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
