import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './not-found.module.css'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<div className={styles.not_found}>
				<Header></Header>
				<div className={styles.not_found_content}>
					<Image
						src='/cat.png'
						alt='cat'
						width={349}
						height={249}
						priority
					></Image>
					<h1>Your page not found. Sorry:(</h1>
				</div>
				<Footer></Footer>
			</div>
		</>
	)
}
