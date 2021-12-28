import { CSSProperties } from 'react';
import styles from './typography.module.scss';

interface Props {
	variant: string;
	style?: CSSProperties;
	children: React.ReactNode;
	className?: string;
}

export default function Typography({ variant, style, children, className }: Props) {
	let typography = <p></p>;
	switch (variant) {
		case 'h1':
			typography = (
				<h1 style={style} className={styles.h1}>
					{children}
				</h1>
			);
			break;

		case 'h2':
			typography = (
				<h2 style={style} className={styles.h2}>
					{children}
				</h2>
			);
			break;

		case 'h3':
			typography = (
				<h3 style={style} className={styles.h3}>
					{children}
				</h3>
			);
			break;
		case 'h4':
			typography = (
				<h4 style={style} className={styles.h4}>
					{children}
				</h4>
			);
			break;

		case 'h5':
			typography = (
				<h5 style={style} className={styles.h5}>
					{children}
				</h5>
			);
			break;

		case 'h6':
			typography = (
				<h6 style={style} className={styles.h6}>
					{children}
				</h6>
			);
			break;

		case 'description':
			typography = (
				<p style={style} className={styles.description}>
					{children}
				</p>
			);
			break;

		default:
			typography = <p>{children}</p>;
			break;
	}

	if (className) {
		return <p className={className}>{children}</p>;
	}
	return typography;
}
