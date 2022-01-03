interface ProjectDto {
	image: string;
	type: string;
	title: string;
	stack: string[];
	link: string;
	description: string;
	repo: string;
}

const data: ProjectDto[] = [
	{
		image: 'bonafide-generator.jpg',
		type: 'Featured Project',
		title: 'Bonafide Generator',
		stack: ['ReactJS', 'Styled Components', '@react-pdf/renderer'],
		link: 'https://bonafide-generator.netlify.app/',
		repo: 'https://github.com/sank2000/bonafide-generator',
		description: 'A MERN Stack application for a student to obtain an online bonafide certificate.'
	},
	{
		image: 'Savory-api.jpg',
		type: 'Featured Project',
		title: 'Savory API - A food ordering API',
		stack: ['Node.js', 'Express', 'MySQL', 'Swagger'],
		link: 'https://savory-api.herokuapp.com/',
		repo: 'https://github.com/PranavGPR/savory-api',
		description:
			'The REST API backend for Savory, a food ordering app API, built on Node.js and Express with MySQL as the Database. Swagger UI is used to create documentation of the routes for this REST API.'
	},
	{
		image: 'infinite-loop-club.jpg',
		type: 'Featured Project',
		title: 'Infinite Loop Club Website',
		stack: ['ReactJS', 'Styled Components'],
		link: 'https://infinite-loop-club.netlify.app/',
		repo: 'https://github.com/Infinite-Loop-Club/club-site',
		description: 'The official site of Infinite loop club of Anna University, Trichy.'
	},

	{
		image: 'fullycart.jpg',
		type: 'Featured Project',
		title: 'FullyCart',
		stack: ['ReactJS', 'Redux', 'Node.js', 'Express', 'MongoDB'],
		link: 'https://fullycart.herokuapp.com/',
		repo: 'https://github.com/PranavGPR/FullyCart',
		description:
			'An E-Commerce Clothes shopping site built on ReactJS and Redux for FrontEnd, Express for Server and MongoDB for Database.'
	},
	{
		image: '7days50projects.jpg',
		type: 'Collaborated Project',
		title: '7Days - 50Projects',
		stack: ['NextJS', 'ReactJS', 'Styled Components', 'TypeScript'],
		link: 'https://7days50projects.vercel.app/',
		repo: 'https://github.com/benxene/7days-50projects',
		description:
			'This is a derivative of 50days50projects which is a course consisting of 50 mini projects produced by Brad Traversy and Florin Pop. Me and my colleages designed and built it on Next JS, Styled Components and TypeScript.'
	}
];

export default data;
