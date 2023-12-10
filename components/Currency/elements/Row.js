import styles from '../styles.module.css'

export default function Row(props) {
	return (
		<tr className={styles.tr}>
			<td className={styles.td}>
				<div className={styles.td_div}>
					<img
						src={props.coin.name + '.png'}
						alt='icon'
						width={36}
						height={36}
					></img>
					{props.coin.name}
					<span>{props.coin.symbol}</span>
				</div>
			</td>
			<td className={styles.td}>
				<span className={styles.dollar}>$ </span>
				{Number(props.coin.priceUsd).toFixed(2)}
			</td>
			<td className={styles.td}>
				<span
					className={
						props.coin.changePercent24Hr >= 0 ? styles.plus : styles.minus
					}
				>
					{Number(props.coin.changePercent24Hr).toFixed(2)}
					<span className={styles.percent}> %</span>
				</span>
				{/* {Number(props.coin.changePercent24Hr).toFixed(2)} */}
			</td>
			<td className={styles.td}>
				{'$' + Number(props.coin.volumeUsd24Hr).toFixed(0)}
			</td>
			<td className={styles.td}>
				<button className={styles.trade_button}>Trade</button>
			</td>
		</tr>
	)
}
