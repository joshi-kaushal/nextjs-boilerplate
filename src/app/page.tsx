import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center gap-8 p-24">
			<h1>Next.js DRY Boilerplate</h1>
			<h2>
				I was tired of reinstalling everything from scratch every time starting
				a new project.
			</h2>
			<h3>
				So I created this boilerplate. It consists of all the settings,
				dependencies, and configs I use in my all projects.
			</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi
				quisquam eaque error perferendis commodi vel explicabo, temporibus
				doloremque excepturi non ullam optio voluptate sit odit illo impedit ut
				soluta.
			</p>

			<ul className="list-[✅]">
				<li>
					<p>Next.js 14 (App Router)</p>
				</li>
				<li>
					<p>Tailwind CSS + shadcn/ui</p>
				</li>
				<li>
					<p>Custom CSS for myself</p>
				</li>
				<li>
					<p>ESLint + Prettier</p>
				</li>
				<li>
					<p>React Icons</p>
				</li>
			</ul>

			<Link
				href="https://github.com/joshi-kaushal"
				target="_blank"
				rel="noopener noreferrer"
				className="href"
			>
				<p>Visit my GitHub</p>
			</Link>
		</main>
	);
}
