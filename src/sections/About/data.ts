interface EducationDto {
	title: string;
	description: string;
}

interface ExperienceDto {
	designation: string;
	company: string;
	description: string;
	link: string;
}

export const education: EducationDto[] = [
	{
		title: 'Tagore Vidyalayam Matriculation Higher Secondary School',
		description: 'Primary and Secondary Schooling (2016) - Madurai'
	},
	{
		title: 'Thiagarajar Model Higher Secondary School',
		description: 'Higher Secondary Schooling (2018) - Madurai'
	},
	{
		title: 'University College of Engineering - BIT Campus',
		description: 'Under Graduate (2018 - Present) - Trichy'
	}
];

export const experience: ExperienceDto[] = [
	{
		designation: 'Frontend Developer',
		company: 'App Town Technologies',
		description:
			'Worked as the Lead Frontend developer on a React project in App Town Technologies from January 2021 to February 2021.',
		link: 'https://apptown.in/'
	}
];
