"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection, ContactSection } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<TechnologiesSection />
			<ContactSection />
		</div>
	);
}
