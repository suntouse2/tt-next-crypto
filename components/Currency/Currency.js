'use client'

import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import Row from '@/components/Currency/elements/Row'

export default function Currency() {
	const [coins, setCoins] = useState([])
	const [isLoaded, setLoaded] = useState(false)
	const fetchData = async () => {
		try {
			const response = await fetch('https://api.coincap.io/v2/assets')
			const data = await response.json()
			const filtered = data.data.filter(
				(coin) =>
					coin.id == 'bitcoin' ||
					coin.id == 'ethereum' ||
					coin.id == '1inch' ||
					coin.id == 'binance-coin' ||
					coin.id == 'binance-usd' ||
					coin.id == 'polygon'
			)
			setCoins(filtered)
			setLoaded(true)
		} catch (error) {
			console.error('Error on fetching data from api.coincap.io')
		}
	}
	useEffect(() => {
		fetchData()
		setInterval(() => {
			fetchData()
		}, 1000 * 5)
	}, [])
	return (
		<section className={styles.currency}>
			<table className={styles.table}>
				<tbody className={styles.tbody}>
					<tr className={styles.tr}>
						<th className={styles.th}>Asset</th>
						<th className={styles.th}>Price</th>
						<th className={styles.th}>Change</th>
						<th className={styles.th}>Volume</th>
						<th className={styles.th}></th>
					</tr>
					{isLoaded ? (
						coins.map((coin, index) => <Row coin={coin} key={index}></Row>)
					) : (
						<>
							{Array.from({ length: 6 }, (_, index) => (
								<tr key={index} className={styles.tr_loading}>
									<td>
										<div className={styles.shine_container}>
											<div className={styles.shine_light}></div>
										</div>
									</td>
								</tr>
							))}
						</>
					)}
				</tbody>
			</table>
			<button className={styles.table_button}>All assets</button>
		</section>
	)
}
