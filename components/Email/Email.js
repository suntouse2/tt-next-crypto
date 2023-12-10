import styles from './styles.module.css'
import Image from 'next/image'
import Input from '@/elements/Input/Input'
import AuthButton from '@/elements/Buttons/AuthButton/AuthButton'

export default function Email() {
	return (
		<section className={styles.email}>
			<div className={styles.light}>
				<Image
					src='/bg.png'
					width={262}
					height={1304}
					alt='background'
					priority='false'
				></Image>
			</div>
			<div className={styles.light2}></div>
			<div className={styles.light3}></div>
			<div className={styles.email_content}>
				<h2 className={styles.email_text}>
					Register your account now and start to trade
				</h2>
				<div className={styles.banner_input}>
					<Input type='mail' placeholder='Example@gmail.com'></Input>
					<AuthButton value='Sign in'></AuthButton>
				</div>
			</div>
		</section>
	)
}
