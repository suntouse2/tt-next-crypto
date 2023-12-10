import styles from './styles.module.css'
import Image from 'next/image'

export default function Benefits() {
	return (
		<section className={styles.benefits}>
			<ul className={styles.cards}>
				<li className={styles.card}>
					<Image src='card1.svg' width={60} height={48} alt='icon'></Image>
					<h3 className={styles.card_title}>
						User Safe Asset Fund (SAFU)world.
					</h3>
					<p className={styles.card_descp}>
						Bitlist holds 10% of all trading fees in a protected asset fund to
						protect a portion of user funds.
					</p>
				</li>
				<li className={styles.card}>
					<Image src='card2.svg' width={60} height={48} alt='icon'></Image>
					<h3 className={styles.card_title}>User Access Control</h3>
					<p className={styles.card_descp}>
						Personalized access control allows you to limit the devices and
						addresses that can access your account.
					</p>
				</li>
				<li className={styles.card}>
					<Image src='card3.svg' width={60} height={48} alt='icon'></Image>
					<h3 className={styles.card_title}>Improved data encryption</h3>
					<p className={styles.card_descp}>
						Your transaction data is encrypted - only you can access your
						personal data.
					</p>
				</li>
				<li className={styles.card}>
					<Image src='card4.svg' width={60} height={48} alt='icon'></Image>
					<h3 className={styles.card_title}>Support 24/7</h3>
					<p className={styles.card_descp}>
						24/7 real-time support is always ready to help you.
					</p>
				</li>
				<li className={styles.card}>
					<Image src='card5.svg' width={60} height={48} alt='icon'></Image>
					<h3 className={styles.card_title}>
						Fast replineshments and withdraws
					</h3>
					<p className={styles.card_descp}>
						Transfer funds to and from your accounts quickly and easily.
					</p>
				</li>
				<li className={styles.card}>
					<Image src='card6.svg' width={60} height={48} alt='icon'></Image>
					<h3 className={styles.card_title}>Comfortable P2P platform</h3>
					<p className={styles.card_descp}>
						Top up your account in any convenient way on the P2P platform at
						favorable rates.
					</p>
				</li>
			</ul>
		</section>
	)
}
