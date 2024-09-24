import styles from "../../../scss/qualitiesSec.module.scss";

export interface QualityProps {
	id?: string;
	title: string;
	icon: {
		url: string;
		alt: string;
	};
	description: string;
}

export default function Quality({ title, icon, description }: QualityProps) {
	return (
		<div className={styles.card}>
			<img src={icon.url} alt={icon.alt} />
			<div className={styles.card_text}>
				<p className={styles.title}>{title}</p>
				<p>{description}</p>
			</div>
		</div>
	);
}
