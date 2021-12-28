import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

import { Typography, Accordion, Button } from 'components';
import styles from './about.module.scss';
import { education, experience } from './data';

export default function About() {
	const [data, setData] = useState('');

	const getUser = async () => {
		try {
			const res = await fetch('https://api.github.com/users/pranavgpr');
			const data = await res.json();
			setData(data.avatar_url);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, [data]);

	return (
		<>
			<section className={styles.about} id='about'>
				<div className={styles.about__container}>
					<section style={{ marginBottom: '5rem', width: '100%' }}>
						<Fade bottom cascade>
							<Typography variant='h3'>About Me</Typography>
						</Fade>
						<div className={styles.about__gridContainer}>
							<Fade bottom cascade>
								<div className={styles.about__content}>
									<Typography variant='description'>
										Hi, I'm Pranav. I'm a Full Stack Web Developer and a Gamer 👨🏻‍💻 from Madurai,
										Tamil Nadu.
										<br />
										<br />
										I'm currently pursuing my under graduation 👨🏻‍🎓 on Computer Science and
										Engineering in{' '}
										<a href='http://www.aubit.edu.in/index.htm' target='_blank'>
											<span className={styles.underline_text}>
												University College of Engineering - BIT Campus, Trichy
											</span>
										</a>
										. I love to create awesome sites with beautiful CSS and SVG's. I love to code
										with my friends ❤. Eating and Cooking 👨🏻‍🍳 are my favorites other than coding.
										<br />
										<br />
										My hobby is to play console games. I love to spend hours and hours in playing
										console and PC games. I also have an idea to become a game developer 💪🏻.
									</Typography>

									<Button
										href='https://drive.google.com/file/d/1t5eq798tXWKJacddPnFXsRkPLq4OePOo/view?usp=sharing'
										style={{
											marginTop: '3rem',
											border: '2px solid #007acc',
											borderRadius: '5px'
										}}
										target_blank={true}
									>
										Resume
									</Button>
								</div>
								<figure className={styles.about__imageContainer}>
									<img className={styles.about__image} src={data} />
								</figure>
							</Fade>
						</div>
					</section>

					<section className={styles.education}>
						<Fade bottom cascade>
							<Typography variant='h4' style={{ marginBottom: '3rem' }}>
								Education
							</Typography>
						</Fade>
						{education.map(({ title, description }, index) => {
							return (
								<Accordion key={index} title={title} arrow={true}>
									{description}
								</Accordion>
							);
						})}
					</section>

					<section className={styles.experience}>
						<Fade bottom cascade>
							<Typography variant='h4' style={{ marginBottom: '3rem' }}>
								Experience
							</Typography>
						</Fade>
						{experience.map(({ designation, description, company, link }, index) => {
							return (
								<Accordion key={index} title={designation} arrow={true} type={company} link={link}>
									{description}
								</Accordion>
							);
						})}
					</section>
				</div>
			</section>
			<section id='skills' className={styles.skills}>
				<Fade bottom cascade>
					<Typography variant='h3' style={{ marginBottom: '3rem' }}>
						Skills
					</Typography>
					<div className={styles.skills__icons}>
						<span className='icon icon-html5'>
							<span className='tooltip'>HTML</span>
						</span>

						<span className='icon icon-css3'>
							<span className='tooltip'>CSS</span>
						</span>

						<span className='icon icon-sass'>
							<span className='tooltip'>Sass</span>
						</span>

						<span className='icon icon-styled-components'>
							<span className='tooltip'>Styled Components</span>
						</span>

						<span className='icon icon-javascript'>
							<span className='tooltip'>Javascript</span>
						</span>

						<span className='icon icon-typescript'>
							<span className='tooltip'>TypeScript</span>
						</span>

						<span className='icon icon-react'>
							<span className='tooltip'>React</span>
						</span>

						<span className='icon icon-redux'>
							<span className='tooltip'>Redux</span>
						</span>

						<span className='icon icon-next-dot-js'>
							<span className='tooltip'>NextJS</span>
						</span>

						<span className='icon icon-apollo'>
							<span className='tooltip'>Apollo</span>
						</span>

						<span className='icon icon-graphql'>
							<span className='tooltip'>GraphQL</span>
						</span>

						<span className='icon icon-socket-dot-io'>
							<span className='tooltip'>Socket.io</span>
						</span>

						<span className='icon icon-node-dot-js'>
							<span className='tooltip'>NodeJS</span>
						</span>

						<span className='icon icon-express'>
							<span className='tooltip'>Express</span>
						</span>

						<span className='icon icon-jest'>
							<span className='tooltip'>Jest</span>
						</span>

						<span className='icon icon-mongodb'>
							<span className='tooltip'>MongoDB</span>
						</span>

						<span className='icon icon-firebase'>
							<span className='tooltip'>Firebase</span>
						</span>

						<span className='icon icon-postgresql'>
							<span className='tooltip'>PostgreSQL</span>
						</span>

						<span className='icon icon-mysql'>
							<span className='tooltip'>MySQL</span>
						</span>

						<span className='icon icon-sequelize'>
							<span className='path1'></span>
							<span className='path2'></span>
							<span className='path3'></span>
							<span className='path4'></span>
							<span className='path5'></span>
							<span className='path6'></span>
							<span className='path7'></span>
							<span className='path8'></span>
							<span className='path9'></span>
							<span className='path10'></span>
							<span className='path11'></span>
							<span className='path12'></span>
							<span className='path13'></span>
							<span className='path14'></span>
							<span className='path15'></span>
							<span className='path16'></span>
							<span className='path17'></span>
							<span className='path18'></span>
							<span className='path19'></span>
							<span className='path20'></span>
							<span className='path21'></span>
							<span className='path22'></span>
							<span className='path23'></span>
							<span className='path24'></span>
							<span className='path25'></span>
							<span className='path26'></span>
							<span className='path27'></span>
							<span className='tooltip'>Sequalize</span>
						</span>

						<span className='icon icon-docker'>
							<span className='tooltip'>Docker</span>
						</span>

						<span className='icon icon-c'>
							<span className='tooltip'>C</span>
						</span>

						<span className='icon icon-cplusplus'>
							<span className='tooltip'>C++</span>
						</span>

						<span className='icon icon-java'>
							<span className='path1'></span>
							<span className='path2'></span>
							<span className='path3'></span>
							<span className='path4'></span>
							<span className='path5'></span>
							<span className='tooltip'>Java</span>
						</span>

						<span className='icon icon-python'>
							<span className='tooltip'>Python</span>
						</span>

						<span className='icon icon-git'>
							<span className='tooltip'>Git</span>
						</span>

						<span className='icon icon-figma'>
							<span className='path1'></span>
							<span className='path2'></span>
							<span className='path3'></span>
							<span className='path4'></span>
							<span className='path5'></span>
							<span className='tooltip'>Figma</span>
						</span>
					</div>
				</Fade>
			</section>
		</>
	);
}
