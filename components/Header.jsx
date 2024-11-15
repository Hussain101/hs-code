"use client";

import { Logo, Menu, ConnectMedia, MobileMenu, ThemeSwitcher } from "components";
import Link from "next/link";
import { useMediaQuery } from "utils";

export function AppHeader() {
	const isMobile = useMediaQuery();
 
	return (
		<header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm">
			<div className="container-md">
				<div className="flex justify-between items-center gap-3">
					{/* <Logo /> */}
					<Link href={"/"} className="text-xl font-bold ">@HS-code</Link>
					{isMobile ? <MobileMenu /> : <Menu />}
					<div className="flex items-center gap-5">
						{!isMobile && <ConnectMedia />}
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
