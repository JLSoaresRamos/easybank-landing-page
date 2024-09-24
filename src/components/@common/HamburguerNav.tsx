import { useState, useEffect } from "react";
import hamburgerIco from "/images/icon-hamburger.svg";
import closeIco from "/images/icon-close.svg";

import styles from "../../scss/hamburguerNav.module.scss";

export default function HamburguerNav() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggle = () => {
		setIsNavOpen(!isNavOpen);
	};

	const handleResize = () => {
		if (window.innerWidth >= 1024) {
			setIsNavOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<button
				className={styles.hamburguerNav}
				onClick={toggle}
				aria-label="Toggle Menu"
			>
				{isNavOpen ? (
					<img src={closeIco} alt="Close Menu" />
				) : (
					<img src={hamburgerIco} alt="Open Menu" />
				)}
			</button>

			<div className={`${styles.float_menu} ${isNavOpen ? styles.open : ""}`}>
				<nav>
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
			</div>
		</>
	);
}
