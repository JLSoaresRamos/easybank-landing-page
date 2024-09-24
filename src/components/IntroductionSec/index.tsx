import styles from "../../scss/introductionSec.module.scss";
import Button from "../@common/Button";

import bg_intro from "/images/bg-intro-desktop.svg";
import mockups from "/images/image-mockups.png";
import bg_intro_mobile from "/images/bg-intro-mobile.svg";

export default function IntroductionSec() {
	return (
		<section className={styles.wrap_introduction}>
			<img src={bg_intro_mobile} className={styles.bgmobile} />
			<img src={mockups} className={styles.mockupmobile} />
			<div className={styles.intro_text}>
				<h1>Next generation digital banking</h1>
				<p>
					Take your financial life online. Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing, and much
					more.
				</p>
				<Button>Request Invite</Button>
			</div>
			<img src={bg_intro} className={styles.bgimg} />
			<img src={mockups} className={styles.mockups} />
		</section>
	);
}
