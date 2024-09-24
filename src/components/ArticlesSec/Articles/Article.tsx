import styles from "../../../scss/articlesSec.module.scss";

export interface ArticleProps {
	id?: string;
	title: string;
	description: string;
	author: string;
	img: {
		url: string;
		alt: string;
	};
}

export default function Article({
	title,
	description,
	author,
	img,
}: ArticleProps) {
	return (
		<article className={styles.article}>
			<img src={img.url} alt={img.alt} />
			<div className={styles.content}>
				<p className={styles.author}>By {author}</p>
				<div className={styles.article_text}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
			</div>
		</article>
	);
}
