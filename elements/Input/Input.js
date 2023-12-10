import styles from './styles.module.css'
import Image from 'next/image'

export default function Input(props) {
	let icon
	let type
	switch (props.type) {
		case 'search':
			icon = 'search.svg'
			type = 'search'
			break
		case 'mail':
			icon = 'mail.svg'
			type = 'email'
			break
		default:
			type = 'text'
			break
	}
	return (
		<>
			<label className={styles.label}>
				{icon ? (
					<Image
						className={styles.icon}
						src={icon}
						alt='icon'
						priority={false}
						width={20}
						height={20}
					></Image>
				) : null}
				<input
					className={styles.input}
					type={type}
					placeholder={props.placeholder}
				/>
			</label>
		</>
	)
}
