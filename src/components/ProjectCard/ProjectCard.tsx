import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';

import { Typography } from '..';
import styles from './projectcard.module.scss';

interface ProjectProps {
	image: string;
	type: string;
	title: string;
	children: string;
	stack: string[];
	link: string;
	repo: string;
}

interface TechProps {
	value: string;
	key?: number;
}

const Tech = ({ value }: TechProps): React.ReactElement => {
	return <span className={styles.project__techItem}>{value}</span>;
};

export default function ProjectCard({
	image,
	type,
	title,
	children,
	stack,
	link,
	repo
}: ProjectProps) {
	return (
		<div className={styles.project}>
			<figure className={styles.project__picture}>
				<img src={image} alt='aubit' className={styles.project__picture_img} />
				<figcaption className={styles.project__picture_caption}>
					{repo && (
						<a href={repo} target='_blank'>
							<FaExternalLinkAlt />
							Repo
						</a>
					)}
					{link && (
						<a href={link} target='_blank'>
							<FaLink />
							Link
						</a>
					)}
				</figcaption>
			</figure>
			<div className={styles.project__details}>
				<span className={styles.project__sub_heading}>{type}</span>
				<Typography variant='h4' style={{ margin: '2rem 0' }}>
					{title}
				</Typography>
				<Typography variant='description' className={styles.project__description}>
					{children}
				</Typography>
				<div className={styles.project__techs}>
					{stack.map((value, index) => {
						return <Tech value={value} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
}
