import axios from 'axios'
import { urlBaseBackup, headers } from '../configs/axiosConfig'

const messageControllerBackup = {
    create: async (payload) => {
        try {
            const url = `${urlBaseBackup}/auth/messages`
            const response = await axios.post(url, payload, {
                headers: {
                    ...headers,
                    authorization: window.localStorage.getItem('token')
                }
            })
            return response.data
        }

        catch (error) {
            console.error(error)
            return error.response.data
        }
    },

    getChatMessages: async (chatId) => {
        try {
            const response = await axios.get(`${urlBaseBackup}/auth/messages/${chatId}`, {
                headers: {
                    ...headers,
                    authorization: window.localStorage.getItem('token')
                }
            })

            return response.data
        }

        catch (error) {
            console.error(error)
            return error.response.data
        }
    }
}

export default messageControllerBackup