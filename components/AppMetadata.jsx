const author = "Hussain Siddiqui";
const description =
	"Forward Deployed Engineer and Full Stack Developer with 3+ years experience building production-ready web and mobile platforms.";
const url = "https://hs-code.vercel.app";

export const AppMetadata = {
	metadataBase: new URL("http://localhost:3000/"),
	title: {
		default: `Hussain Siddiqui | Forward Deployed Engineer`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Hussain Siddiqui",
		"Forward Deployed Engineer",
		"Full Stack Developer",
		"React",
		"Next.js",
		"Node.js",
		"Portfolio website"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	openGraph: {
		title: `${author} | Forward Deployed Engineer`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "/favicon.png",
				width: 800,
				height: 600,
				alt: "Hussain Siddiqui Portfolio"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
