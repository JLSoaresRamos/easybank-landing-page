import styles from "../../scss/qualitiesSec.module.scss";
import Qualities from "./Qualities";

export default function QualitiesSec() {
	return (
		<section className={styles.wrap_qualities}>
			<div className={styles.qualities_text}>
				<h2>Why Choose Easybank</h2>
				<p className={styles.description}>
					We leverage Open Banking to turn your bank account into your financial
					hub. Control your finances like never before.
				</p>
			</div>
			<Qualities />
		</section>
	);
}
