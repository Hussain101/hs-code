"use client";

import { Menu, ConnectMedia, MobileMenu, ThemeSwitcher } from "components";
import Link from "next/link";
import { useMediaQuery } from "utils";

export function AppHeader() {
	const isMobile = useMediaQuery();
 
	return (
		<header className="w-full py-5 sticky top-0 z-40 bg-[#0b0c0e]/90 backdrop-blur-md border-b border-white/10 flex justify-center">
			<div className="container-md flex items-center justify-between gap-6 w-full">
				{/* Far Left Logo */}
				<Link href={"/"} className="flex items-center gap-2.5 group shrink-0">
					<div className="w-4 h-4 rounded-sm bg-white flex items-center justify-center font-mono font-bold text-[10px] text-black">
						H
					</div>
					<span className="font-mono text-sm tracking-[0.1em] font-semibold text-white group-hover:text-slate-300 transition-colors whitespace-nowrap">
						HUSSAIN // FDE
					</span>
				</Link>

				{/* Far Right Nav Menu + Action Buttons */}
				<div className="flex items-center justify-end gap-6 md:gap-8 flex-1">
					{isMobile ? <MobileMenu /> : <Menu />}

					<div className="flex items-center gap-4 shrink-0">
						{!isMobile && <ConnectMedia />}
						<a
							href="#contact"
							className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold text-xs px-4 py-2 hover:bg-slate-200 transition-all duration-200 whitespace-nowrap shadow-sm"
						>
							Book a Demo
						</a>
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
