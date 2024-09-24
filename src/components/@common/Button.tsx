import { ButtonHTMLAttributes } from "react";
import styles from "../../scss/button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export default function Button({ children, className, ...props }: ButtonProps) {
	return (
		<button className={`${styles.button} ${className}`} {...props}>
			{children}
		</button>
	);
}
