"use client";

import { useState } from "react";
import { HeadingDivider } from "components";
import { domAnimation, LazyMotion } from "framer-motion";
import { BsEnvelopeAt, BsGithub, BsLinkedin, BsSendCheck } from "react-icons/bs";

export function ContactSection() {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" });
	const [status, setStatus] = useState("idle");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) return;
		
		setStatus("submitting");
		setTimeout(() => {
			setStatus("success");
			setFormData({ name: "", email: "", message: "" });
		}, 1000);
	};

	return (
		<LazyMotion features={domAnimation}>
			<section id="contact" className="section py-20 relative">
				<HeadingDivider title="Get In Touch" />

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
					{/* Left Details Panel */}
					<div className="space-y-6">
						<h3 className="text-3xl font-extrabold text-slate-100">
							Let&apos;s build something <span className="text-white underline decoration-emerald-500 underline-offset-4">extraordinary</span> together.
						</h3>
						<p className="text-slate-400 text-lg leading-relaxed">
							Whether you have a product idea, an open software position, or just want to discuss web technology — feel free to send a message!
						</p>

						<div className="space-y-4 pt-4">
							<a
								href="mailto:contact@hussain.dev"
								className="p-5 rounded-2xl glass-panel flex items-center gap-4 group hover:border-indigo-500/50 transition-all"
							>
								<div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
									<BsEnvelopeAt className="text-2xl" />
								</div>
								<div>
									<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Me</span>
									<h4 className="text-slate-100 font-bold group-hover:text-indigo-400 transition-colors">Direct Email Contact</h4>
								</div>
							</a>

							<a
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="p-5 rounded-2xl glass-panel flex items-center gap-4 group hover:border-purple-500/50 transition-all"
							>
								<div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
									<BsGithub className="text-2xl" />
								</div>
								<div>
									<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">GitHub</span>
									<h4 className="text-slate-100 font-bold group-hover:text-purple-400 transition-colors">Explore Open Source Repositories</h4>
								</div>
							</a>

							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="p-5 rounded-2xl glass-panel flex items-center gap-4 group hover:border-cyan-500/50 transition-all"
							>
								<div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
									<BsLinkedin className="text-2xl" />
								</div>
								<div>
									<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">LinkedIn</span>
									<h4 className="text-slate-100 font-bold group-hover:text-cyan-400 transition-colors">Connect Professionally</h4>
								</div>
							</a>
						</div>
					</div>

					{/* Right Form Panel */}
					<div className="p-8 rounded-3xl glass-panel border border-slate-700/60 shadow-2xl relative">
						{status === "success" ? (
							<div className="py-16 text-center space-y-4">
								<div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl">
									<BsSendCheck />
								</div>
								<h4 className="text-2xl font-bold text-slate-100">Message Sent Successfully!</h4>
								<p className="text-slate-400 text-sm">Thank you for reaching out. I will get back to you shortly.</p>
								<button
									onClick={() => setStatus("idle")}
									className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 font-semibold text-sm transition-colors"
								>
									Send Another Message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
										Your Name
									</label>
									<input
										type="text"
										required
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
										placeholder="John Doe"
										className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
									/>
								</div>

								<div>
									<label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
										Email Address
									</label>
									<input
										type="email"
										required
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
										placeholder="john@example.com"
										className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
									/>
								</div>

								<div>
									<label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
										Message
									</label>
									<textarea
										rows={4}
										required
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
										placeholder="Tell me about your project or opportunity..."
										className="w-full px-4 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
									/>
								</div>

								<button
									type="submit"
									disabled={status === "submitting"}
									className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50"
								>
									{status === "submitting" ? "Sending Message..." : "Send Message"}
								</button>
							</form>
						)}
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
