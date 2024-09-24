import Article, { ArticleProps } from "./Article";

import styles from "../../../scss/articlesSec.module.scss";

const articles: ArticleProps[] = [
	{
		id: "art1",
		title: "Receive money in any currency with no fees",
		description: "The world is getting smaller and we’re becoming more mobile.",
		author: "Claire Robinson",
		img: {
			url: "/images/image-currency.jpg",
			alt: "Image description",
		},
	},
	{
		id: "art2",
		title: "Treat yourself without worrying about money",
		description:
			"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.",
		author: "Wilson Hutton",
		img: {
			url: "/images/image-restaurant.jpg",
			alt: "Image description",
		},
	},
	{
		id: "art3",
		title: "Take your Easybank card wherever you go",
		description:
			"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad.",
		author: "Wilson Hutton",
		img: {
			url: "/images/image-plane.jpg",
			alt: "Image description",
		},
	},
	{
		id: "art4",
		title: "Our invite-only Beta accounts are now live!",
		description:
			"After a lot of hard work by the whole team, we’re excited to launch our closed beta.",
		author: "Claire Robinson",
		img: {
			url: "/images/image-confetti.jpg",
			alt: "Image description",
		},
	},
];

export default function Articles() {
	return (
		<div className={styles.articles}>
			{articles.map((article) => (
				<Article
					key={article.id}
					title={article.title}
					author={article.author}
					description={article.description}
					img={article.img}
				/>
			))}
		</div>
	);
}
