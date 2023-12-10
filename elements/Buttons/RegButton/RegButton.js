import styles from './styles.module.css'
export default function RegButton(props) {
	return (
		<>
			<button className={styles.register_button}>{props.value}</button>
		</>
	)
}
