"use client";

import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20">
			<h2 className="text-5xl font-extrabold text-gradient mb-4">404 - Page Not Found</h2>
			<p className="text-slate-400 text-lg mb-8 max-w-md">
				The page or resource you are looking for does not exist or has been moved.
			</p>
			<Link
				href="/"
				className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-all"
			>
				Return to Home
			</Link>
		</div>
	);
}
