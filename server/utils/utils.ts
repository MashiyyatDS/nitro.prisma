import CryptoJS from 'crypto-js'

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
	const create = (value: string): string => {
		return CryptoJS.SHA256(value + encryptionKey).toString()
	}

	const check = (value: string, hashedValue: string): boolean => {
		const newHash = CryptoJS.SHA256(value + encryptionKey).toString()
		return newHash === hashedValue
	}

	return { create, check }
}
