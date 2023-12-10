import Input from '@/elements/Input/Input'
import styles from './styles.module.css'
import Image from 'next/image'
import AuthButton from '@/elements/Buttons/AuthButton/AuthButton'

export default function Banner() {
	return (
		<section className={styles.banner}>
			<div className={styles.banner_input}>
				<Input type='mail' placeholder='Example@gmail.com'></Input>
				<AuthButton value='Sign in'></AuthButton>
			</div>
			<div className={styles.banner_text}>
				<Image
					priority='false'
					src='/banner_subtitle.svg'
					alt='logo'
					width={400}
					height={32}
				></Image>
				<h1 className={styles.banner_title}>
					Buy, trade and store cryptocurrencies
				</h1>
			</div>
			<div className={styles.imgDivContainer}>
				<div className={styles.imgDiv}>
					<div className={styles.light}></div>
					<Image
						src='/banner.svg'
						className={styles.banner_img}
						alt='logo'
						width={640}
						height={283}
						priority
					></Image>
					<Image
						priority='false'
						src='/lines.png'
						alt='logo'
						width={700}
						height={200}
						className={styles.line1}
					></Image>
					<Image
						priority='false'
						src='/lines2.png'
						alt='logo'
						width={700}
						height={200}
						className={styles.line2}
					></Image>
				</div>
			</div>
		</section>
	)
}
