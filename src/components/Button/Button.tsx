import { CSSProperties, ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
	href: string;
	children: ReactNode;
	style?: CSSProperties;
	target_blank?: boolean;
}

export default function Button({ href, children, style, target_blank }: ButtonProps) {
	return (
		<div className={styles.button} style={style}>
			<a href={href} target={target_blank ? '_blank' : '_self'} className={styles.button__content}>
				{children}
			</a>
		</div>
	);
}
