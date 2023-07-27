import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
	const skills = await prisma.skill.findMany()
	const sanitizedSkills = skills.map((skill) => ({
		...skill,
		id: Number(skill.id),
		skill_category_id: Number(skill.skill_category_id),
	}))

	return {
		skills: sanitizedSkills,
	}
})
