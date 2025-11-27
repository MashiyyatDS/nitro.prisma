export default async function restore(prismaModel: any, id: number) {
	const modelResponse = await prismaModel.update({
		where: { id },
		data: {
			deleted_at: null,
		},
	})

	return modelResponse
}
