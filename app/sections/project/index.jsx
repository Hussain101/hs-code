import { HeadingDivider } from "components";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsLink } from "react-icons/bs";
export function ProjectsSection() {
    const projects = [
		{
			id:1,
			image:<Image src={"/assets/images/italipino.png"} width={300} height={150} />,
			name:"ITALIPINO",
			link:"https://italipino-phi.vercel.app/",
			desc:"Platform to connect Gardeners worldwide."

		},
		{
			id:2,
			image:<Image src={"/assets/images/hockey.png"} width={300} height={150} />,
			name:"THE HOCKEY REVIEW",
			link:"https://www.thehockeyreview.com/",
			desc:"Hockey review management system with admin dashboard"


		},
		{
			id:3,
			image:<Image src={"/assets/images/gem-hunter.png"} width={300} height={150} />,
			name:"GEM HUNTERS",
			link:"https://gem-hunters-git-signup-russ-the-man.vercel.app/",
			desc:"NFT based website and payment method integrated with coinremitter"

		},
	]
	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
			<HeadingDivider title="PROJECTS" />
			<div className="flex gap-6 mt-10 justify-center flex-wrap">
				{
					projects.map((item) =>{
						return(
							<Link href={`/sections/project/${item.name}`} key={item.id} className="flex flex-col gap-2 items-center">
							<div className="rounded-t-lg w-[300px] h-[150px] bg-white overflow-hidden">
								{item.image}
							</div>
							<p className="hover:underline text-lg font-semibold mt-2 text-center flex items-center justify-center gap-1 cursor-pointer">{item.name}  <BsLink /> </p>
							<p className="w-[250px] text-center">{item.desc}</p>
						</Link>
						)
					})
				}
			</div>
			</section>
		</LazyMotion>
	);
}
