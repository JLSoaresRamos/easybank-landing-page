import styles from "../../scss/footer.module.scss";

interface SocialMediaProps {
	iconURL: string;
	alt: string;
}

const social_medias: SocialMediaProps[] = [
	{ iconURL: "/images/icon-facebook.svg", alt: "Facebook" },
	{ iconURL: "/images/icon-youtube.svg", alt: "Youtube" },
	{ iconURL: "/images/icon-twitter.svg", alt: "Twitter" },
	{ iconURL: "/images/icon-pinterest.svg", alt: "Pinterest" },
	{ iconURL: "/images/icon-instagram.svg", alt: "Instagram" },
];

export default function SocialMedia() {
	return (
		<div className={styles.icons}>
			{social_medias.map((social) => (
				<img alt={social.alt} src={social.iconURL} key={social.alt}></img>
			))}
		</div>
	);
}
