import CryptoJS from 'crypto-js'
import bcrypt from 'bcrypt'

export default async function restore(prismaModel: any, id: number) {
	const modelResponse = await prismaModel.update({
		where: { id },
		data: {
			deleted_at: null,
		},
	})

	return modelResponse
}

const encryptionKey = process.env.ENC_KEY
export function useCrypto() {
	const encrypt = (data: unknown) =>
		CryptoJS.AES.encrypt(JSON.stringify(data), `${encryptionKey}`).toString()

	const decrypt = (encryptedData: string) => {
		const bytes = CryptoJS.AES.decrypt(encryptedData, `${encryptionKey}`)

		return bytes.toString(CryptoJS.enc.Utf8)
	}
	return { encrypt, decrypt }
}

export function useHash() {
	async function verify(password: string, hash: string) {
		return await bcrypt.compare(password, hash)
	}

	async function hash(password: string): Promise<string> {
		const saltRounds = 10
		const hash = await bcrypt.hash(password, saltRounds)
		return hash
	}

	return { verify, hash }
}
