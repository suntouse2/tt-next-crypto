'use client'

import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'
import BurgerButton from '@/elements/Buttons/BurgerButton/BurgerButton'
import RegButton from '@/elements/Buttons/RegButton/RegButton'
import AuthButton from '@/elements/Buttons/AuthButton/AuthButton'
import Input from '@/elements/Input/Input'
export default function MobileHeader() {
	const [navState, setNavState] = useState(false)

	const showMobileNav = () => {
		if (navState) {
			document.body.classList.remove(styles.overflow_hidden)
		} else {
			document.body.classList.add(styles.overflow_hidden)
		}
		setNavState((navState) => !navState)
	}
	const mobileNavClasses = classNames(styles.mobile_header, {
		[styles.mobile_header_active]: navState,
	})

	useEffect(() => {
		const handleResize = () => {
			const isMobile = window.innerWidth < 1280 //
			if (!isMobile) {
				setNavState(false)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return (
		<>
			<BurgerButton onClick={showMobileNav}></BurgerButton>

			<div className={mobileNavClasses}>
				<nav className={styles.mobile_nav}>
					<Input type='search' placeholder='Search'></Input>
					<ul className={styles.mobile_nav_links}>
						<li className={styles.mobile_nav_link}>
							<a href='#'>Trade</a>
						</li>
						<li className={styles.mobile_nav_link}>
							<a href='#'>P2P</a>
						</li>
						<li className={styles.mobile_nav_link}>
							<a href='#'>Partners</a>
						</li>
						<li className={styles.mobile_nav_link}>
							<a href='#'>Mining</a>
						</li>
						<li className={styles.mobile_nav_link}>
							<a href='#'>Academy</a>
						</li>
					</ul>
					<div className={styles.mobile_nav_buttons}>
						<AuthButton value='Log in'></AuthButton>
						<RegButton value='Register'></RegButton>
					</div>
				</nav>
			</div>
		</>
	)
}
