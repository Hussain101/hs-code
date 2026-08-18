import { Suspense } from "react";
import { AppHeader, AppFooter, AppMetadata, TechBackground } from "components";
import Loading from "./loading";
import "styles/globals.css";
import { ThemeContext } from "context";

export const metadata = { ...AppMetadata };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="relative bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen">
				<ThemeContext>
					<TechBackground />
					<div className="relative z-10 w-full flex flex-col items-center">
						<AppHeader />
						<main className="w-full flex justify-center">
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</main>
						<AppFooter />
					</div>
				</ThemeContext>
			</body>
		</html>
	);
}
