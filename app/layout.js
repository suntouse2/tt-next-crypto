import { Inter } from 'next/font/google'
import './global.css'
const inter = Inter({ subsets: ['latin'], variable: '--var-inter' })
export const metadata = {
	title: 'BITLIST - Decentralized crypto platform',
	description: 'Buy, trade and store cryptocurrencies',
	keywords: [
		'Crypto platform',
		'Trade and store crypto',
		'crypto',
		'buy and sell crypto',
		'blockchain',
	],
	language: 'en-US',
	locale: 'en_US',
	icons: {
		apple: '/apple-icon.png',
	},
	category: 'Finance',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.variable}>{children}</body>
		</html>
	)
}
