import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import AppProvider from "../contexts/AppProvider";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [showChild, setShowChild] = useState(false);
	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		return null;
	}

	return (
		<>
			<Head>
				<title>RCA-ICC</title>
				<link rel='shortcut icon' href='/favicon.svg' type='image/x-icon' />
			</Head>
			<NextNProgress
				color='#ff7b35'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<AppProvider>
				<Component {...pageProps} />
			</AppProvider>
		</>
	);
}

export default MyApp;
