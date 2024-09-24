import Quality, { QualityProps } from "./Quality";
import styles from "../../../scss/qualitiesSec.module.scss";

const qualities: QualityProps[] = [
	{
		id: "qua1",
		title: "Online Banking",
		description:
			"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
		icon: { url: "/images/icon-online.svg", alt: "Pricing" },
	},
	{
		id: "qua2",
		title: "Simple Budgeting",
		description:
			"See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
		icon: { url: "/images/icon-budgeting.svg", alt: "Pricing" },
	},
	{
		id: "qua3",
		title: "Fast Onboarding",
		description:
			"We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
		icon: { url: "/images/icon-onboarding.svg", alt: "Pricing" },
	},
	{
		id: "qua4",
		title: "Open API",
		description:
			"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",

		icon: { url: "/images/icon-api.svg", alt: "Pricing" },
	},
];

export default function Qualities() {
	return (
		<div className={styles.cards}>
			{qualities.map((quality) => (
				<Quality
					key={quality.id}
					title={quality.title}
					description={quality.description}
					icon={quality.icon}
				/>
			))}
		</div>
	);
}
