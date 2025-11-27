import { defineEventHandler } from 'h3'
import prisma from '../../../lib/prisma'

export default defineEventHandler(async (event) => {
	const post = await prisma.post.create({
		data: {
			title: 'Post',
			content: 'Sample Post',
			user: {
				connect: {
					id: 8,
				},
			},
			images: {
				createMany: {
					data: [
						{
							url: 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png',
							description: 'No Description',
						},
						{
							url: 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png',
							description: 'No Description',
						},
						{
							url: 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png',
							description: 'No Description',
						},
						{
							url: 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png',
							description: 'No Description',
						},
						{
							url: 'https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png',
							description: 'No Description',
						},
					],
				},
			},
		},
	})

	return {
		post,
	}
})
