import { defineWebSocket } from 'h3'

export default defineWebSocket({
	message: (peer, message) => {
		console.log(message.data)
	},
})
