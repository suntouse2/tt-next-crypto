import styles from './styles.module.css'
export default function AuthButton(props) {
	return (
		<>
			<button className={styles.auth_button}>{props.value}</button>
		</>
	)
}
