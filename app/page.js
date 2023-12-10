import Header from '@/components/Header/Header'
import Currency from '@/components/Currency/Currency'
import Banner from '@/components/Banner/Banner'
import Benefits from '@/components/Benefits/Benefits'
import Partners from '@/components/Partners/Partners'
import Email from '@/components/Email/Email'
import Footer from '@/components/Footer/Footer'

export default function Home() {
	return (
		<>
			<Header></Header>
			<main>
				<Banner></Banner>
				<Currency></Currency>
				<Partners></Partners>
				<Benefits></Benefits>
				<Email></Email>
			</main>
			<Footer></Footer>
		</>
	)
}
