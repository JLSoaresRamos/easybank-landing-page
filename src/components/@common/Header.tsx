import Button from "./Button";

import Logo from "./Logo";

import styles from "../../scss/header.module.scss";
import HamburguerNav from "./HamburguerNav";

export default function Header() {
	return (
		<header>
			<Logo color="dark" />
			<nav className={styles.nav}>
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#blog">Blog</a>
					</li>
					<li>
						<a href="#careers">Careers</a>
					</li>
				</ul>
			</nav>
			<Button className={styles.buttonHeader}>Request Invite</Button>
			<HamburguerNav />
		</header>
	);
}
