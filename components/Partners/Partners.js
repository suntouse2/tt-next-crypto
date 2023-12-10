import styles from './styles.module.css'
import Image from 'next/image'
export default function Partners() {
	return (
		<section className={styles.partners}>
			<div className={styles.light1}></div>
			<div className={styles.partners_content}>
				<div className={styles.partners_left}>
					<h1 className={styles.partners_text}>
						Bitles is your reliable guide in the world of digital assets
					</h1>
					<p className={styles.partners_descp}>
						The Bitles app is a comprehensive solution for trading digital
						assets. Buy and sell cryptocurrencies quickly and openly,
						comfortably and safely from anywhere in the world.
					</p>
				</div>
				<div className={styles.partners_right}>
					<div className={styles.light2}></div>
					<div className={styles.partners_leftImg}>
						<Image
							src='partner1.svg'
							width={240}
							height={48}
							alt='partner-logo'
						></Image>
						<Image
							src='partner2.svg'
							width={240}
							height={29}
							alt='partner-logo'
						></Image>
						<Image
							src='partner3.svg'
							width={191}
							height={30}
							alt='partner-logo'
						></Image>
					</div>
					<div className={styles.partners_rightImg}>
						<Image
							src='partner4.svg'
							width={120}
							height={48}
							alt='partner-logo'
						></Image>
						<Image
							src='partner5.svg'
							width={240}
							height={46}
							alt='partner-logo'
						></Image>
						<Image
							src='partner6.svg'
							width={196}
							height={35}
							alt='partner-logo'
						></Image>
					</div>
				</div>
			</div>
		</section>
	)
}
