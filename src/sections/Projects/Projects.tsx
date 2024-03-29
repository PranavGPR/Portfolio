import { Fade } from 'react-awesome-reveal';

import styles from './projects.module.scss';
import { Typography, ProjectCard } from 'components';
import projects from './data';

export default function Projects() {
	return (
		<section className={styles.projects} id='projects'>
			<Fade triggerOnce direction='up' cascade>
				<Typography variant='h3' style={{ textAlign: 'center', marginBottom: '5rem' }}>
					My Projects
				</Typography>
			</Fade>
			{projects.map(({ image, type, title, stack, link, repo, description }, index) => {
				return (
					<ProjectCard
						key={index}
						image={image}
						type={type}
						title={title}
						stack={stack}
						link={link}
						repo={repo}
					>
						{description}
					</ProjectCard>
				);
			})}
		</section>
	);
}
