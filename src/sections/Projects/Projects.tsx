import Fade from 'react-reveal/Fade';

import styles from './projects.module.scss';
import { Typography, ProjectCard } from 'components';
import projects from './data';

export default function Projects() {
	return (
		<section className={styles.projects} id='projects'>
			<Fade bottom cascade>
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
