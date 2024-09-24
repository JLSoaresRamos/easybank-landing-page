import Logo from "./Logo";

import styles from "../../scss/footer.module.scss";
import Button from "./Button";
import SocialMedia from "./SocialMedia";

export default function Footer() {
	return (
		<footer className={styles.wrap_footer}>
			<div className={styles.social_media}>
				<Logo color="light" />
				<SocialMedia />
			</div>
			<div className={styles.links}>
				<div className={styles.links_section}>
					<a href="">About Us</a>
					<a href="">Contact</a>
					<a href="">Blog</a>
				</div>
				<div className={styles.links_section}>
					<a href="">Careers</a>
					<a href="">Support</a>
					<a href="">Privacy Policy</a>
				</div>
			</div>
			<div className={styles.rigths}>
				<Button>Request Invite</Button>
				<p>© Easybank. All Rights Reserved</p>
			</div>
		</footer>
	);
}
