import Articles from "./Articles";

import styles from "../../scss/articlesSec.module.scss";

export default function ArticlesSec() {
	return (
		<section className={styles.wrap_articles}>
			<h2 className={styles.title}>Least Articles</h2>
			<Articles />
		</section>
	);
}
