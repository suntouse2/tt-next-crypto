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
			<div className='not-found'>
				<Header></Header>
				<div className='not-found_text'>
					<h1>Your page not found. Sorry:(</h1>
				</div>
				<Footer></Footer>
			</div>
		</>
	)
}
