import Image from 'next/image'
import styles from './styles.module.css'
import Input from '@/elements/Input/Input'
import AuthButton from '@/elements/Buttons/AuthButton/AuthButton'
import RegButton from '@/elements/Buttons/RegButton/RegButton'
import MobileHeader from '@/components/MobileHeader/MobileHeader'
export default function Header() {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header_left}>
					<Image
						priority='false'
						quality={10}
						src='logo.svg'
						alt='logo'
						width={197}
						height={35}
					></Image>
					<div className={styles.header_search_block}>
						<div className={styles.delimiter}></div>
						<Input type='search' placeholder='Search'></Input>
					</div>
				</div>
				<div className={styles.header_right}>
					<nav className={styles.desktop_nav}>
						<ul className={styles.desktop_nav_links}>
							<li className={styles.desktop_nav_link}>
								<a href=''>Trade</a>
							</li>
							<li className={styles.desktop_nav_link}>
								<a href=''>P2P</a>
							</li>
							<li className={styles.desktop_nav_link}>
								<a href=''>Partners</a>
							</li>
							<li className={styles.desktop_nav_link}>
								<a href=''>Mining</a>
							</li>
							<li className={styles.desktop_nav_link}>
								<a href=''>Academy</a>
							</li>
						</ul>
						<div className={styles.delimiter}></div>
						<div className={styles.header_buttons}>
							<RegButton type='register' value='Register'>
								Register
							</RegButton>
							<AuthButton type='auth' value='Log in'></AuthButton>
						</div>
					</nav>
				</div>
				<MobileHeader></MobileHeader>
			</div>
		</header>
	)
}
