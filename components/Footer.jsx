"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { ConnectMedia, ScrollTop } from "components";

export function AppFooter() {
	const footerRef = useRef(null);
	const isInView = useInView(footerRef, { once: true });
	const year = new Date().getFullYear();

	return (
		<LazyMotion features={domAnimation}>
			<footer
				ref={footerRef}
				className="w-full border-t border-slate-800/80 py-10 mt-16 bg-slate-950/40 backdrop-blur-sm flex justify-center"
				style={{
					transform: isInView ? "none" : "translateY(20px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
				}}
			>
				<div className="container-md flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-slate-400 text-sm">
						Copyright &copy; {year} <span className="text-indigo-400 font-semibold">@HS-Code</span>. All rights reserved.
					</p>
					<ScrollTop />
					<ConnectMedia />
				</div>
			</footer>
		</LazyMotion>
	);
}
