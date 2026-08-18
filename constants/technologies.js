import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiPostgresql, DiMongodb, DiDocker } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaAws } from "react-icons/fa";
import { BsBootstrap, BsCpu } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind, TbBrandTypescript, TbBrandCypress } from "react-icons/tb";
import { IconBrandMantine, IconBrandNotion, IconBrandReactNative } from "@tabler/icons-react";
import MuiIcon from "public/assets/svg/mui.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";

export const TECHNOLOGIES = [
	{
		category: "Front-end & Mobile",
		items: [
			{ name: "React.js", icon: <FaReact size={32} /> },
			{ name: "Next.js", icon: <TbBrandNextjs size={32} /> },
			{ name: "TypeScript", icon: <TbBrandTypescript size={32} /> },
			{ name: "React Native", icon: <IconBrandReactNative size={32} /> },
			{ name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Mantine UI", icon: <IconBrandMantine stroke={2} size={32} /> },
			{ name: "Ant Design", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> }
		]
	},
	{
		category: "Backend & Databases",
		items: [
			{ name: "Node.js", icon: <IoLogoNodejs size={32} /> },
			{ name: "PostgreSQL", icon: <DiPostgresql size={32} /> },
			{ name: "MongoDB", icon: <DiMongodb size={32} /> },
			{ name: "Supabase", icon: <TbBrandNextjs size={32} /> },
			{ name: "Strapi CMS", icon: <FaWordpressSimple size={32} /> },
			{ name: "RESTful APIs", icon: <BsCpu size={32} /> }
		]
	},
	{
		category: "DevOps, QA & Testing",
		items: [
			{ name: "Docker", icon: <DiDocker size={32} /> },
			{ name: "AWS (RDS)", icon: <FaAws size={32} /> },
			{ name: "Jest / Vitest", icon: <TbBrandCypress size={32} /> },
			{ name: "Cypress E2E", icon: <TbBrandCypress size={32} /> },
			{ name: "CI/CD Pipelines", icon: <AiFillGithub size={32} /> },
			{ name: "Git / GitHub", icon: <AiFillGithub size={32} /> }
		]
	},
	{
		category: "AI Tools & Workflow",
		items: [
			{ name: "Claude API & Code", icon: <BsCpu size={32} /> },
			{ name: "OpenAI API", icon: <BsCpu size={32} /> },
			{ name: "LangChain", icon: <BsCpu size={32} /> },
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "Notion", icon: <IconBrandNotion size={32} /> }
		]
	}
];
