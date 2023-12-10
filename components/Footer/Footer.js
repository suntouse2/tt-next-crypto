import AuthButton from '@/elements/Buttons/AuthButton/AuthButton'
import styles from './styles.module.css'
import Image from 'next/image'
import RegButton from '@/elements/Buttons/RegButton/RegButton'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_content}>
				<div className={styles.footer_left}>
					<Image src='logo2.svg' width={197} height={35}></Image>
					<ul className={styles.footer_socials}>
						<li className={styles.social}>
							<a href='#'>
								<Image src='tg.svg' width={30} height={30}></Image>
							</a>
						</li>
						<li className={styles.social}>
							<a href='#'>
								<Image src='fb.svg' width={30} height={30}></Image>
							</a>
						</li>
						<li className={styles.social}>
							<a href='#'>
								<Image src='tw.svg' width={30} height={30}></Image>
							</a>
						</li>
					</ul>
					<div className={styles.footer_buttons}>
						<RegButton value='Register'></RegButton>
						<AuthButton value='Log in'></AuthButton>
					</div>
				</div>
				<div className={styles.footer_right}>
					<nav className={styles.footer_nav}>
						<ul>
							<li>
								<a href='#'>Trade</a>
							</li>
							<li>
								<a href='#'>P2P</a>
							</li>
							<li>
								<a href='#'>Partners</a>
							</li>
							<li>
								<a href='#'>Mining</a>
							</li>
							<li>
								<a href='#'>Academy</a>
							</li>
						</ul>
						<ul>
							<li>
								<a href='#'>Privacy policy</a>
							</li>
							<li>
								<a href='#'>Terms of rules</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<p className={styles.footer_subtitle}>Bitlist© All Rights Reserved</p>
		</footer>
	)
}
