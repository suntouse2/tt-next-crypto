'use client'

import { useState, useEffect } from 'react'
import styles from './styles.module.css'

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
						coins.map((coin, index) => (
							<tr className={styles.tr} key={index}>
								<td className={styles.td}>
									<div className={styles.td_div}>
										<img
											src={coin.name + '.png'}
											alt='icon'
											width={36}
											height={36}
										></img>
										{coin.name}
										<span>{coin.symbol}</span>
									</div>
								</td>
								<td className={styles.td}>
									<span className={styles.dollar}>$ </span>
									{Number(coin.priceUsd).toFixed(2)}
								</td>
								<td className={styles.td}>
									<span
										className={
											coin.changePercent24Hr >= 0 ? styles.plus : styles.minus
										}
									>
										{Number(coin.changePercent24Hr).toFixed(2)}
										<span className={styles.percent}> %</span>
									</span>
									{/* {Number(coin.changePercent24Hr).toFixed(2)} */}
								</td>
								<td className={styles.td}>
									{'$' + Number(coin.volumeUsd24Hr).toFixed(0)}
								</td>
								<td className={styles.td}>
									<button className={styles.trade_button}>Trade</button>
								</td>
							</tr>
						))
					) : (
						<>
							<tr className={styles.tr_shine}>
								<td></td>
							</tr>
							<tr className={styles.tr_shine}>
								<td></td>
							</tr>
							<tr className={styles.tr_shine}>
								<td></td>
							</tr>
							<tr className={styles.tr_shine}>
								<td></td>
							</tr>
							<tr className={styles.tr_shine}>
								<td></td>
							</tr>
							<tr className={styles.tr_shine}>
								<td></td>
							</tr>
						</>
					)}
				</tbody>
			</table>
			<button className={styles.table_button}>All assets</button>
		</section>
	)
}
