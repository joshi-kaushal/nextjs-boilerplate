import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/utils/fonts";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Next.js Boilerplate",
	description:
		"My custom Next.js boilerplate packed with shadcn/ui, eslint, prettier, and a lot more.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.variable}>{children}</body>
		</html>
	);
}
