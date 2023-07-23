interface Profile {
	network: string
	username?: string
	url: string
	icon: string
}

interface Credit {
	link: string
	summary: string
}

interface Basics {
	name: string
	title: string
	picture: string
	email: string
	headline: string
	summary: string
	profiles: Profile[]
	credits: Credit[]
}

interface Support {
	summary: string
	link: string
}

interface AboutMe {
	[key: string]: string[]
}

interface AboutDetails {
	basics: Basics
	'About me': AboutMe
	Support: Support
}

export default AboutDetails
