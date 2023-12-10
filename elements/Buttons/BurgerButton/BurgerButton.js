'use client'

import styles from './styles.module.css'
export default function BurgerButton({ onClick }) {
	return (
		<div className={styles.burger_button} onClick={onClick}>
			<span></span>
			<span></span>
			<span></span>
		</div>
	)
}
