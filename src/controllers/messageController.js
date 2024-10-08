import axios from 'axios'
import { urlBase, headers } from '../configs/axiosConfig'
import messageControllerBackup from './messageControllerBackup'

const messageController = {
    create: async (payload) => {
        try {
            const url = `${urlBase}/auth/messages`
            const response = await axios.post(url, payload, {
                headers: {
                    ...headers,
                    authorization: window.localStorage.getItem('token') 
                }
            })
            return response.data
        }

        catch (error) {
            return messageControllerBackup.create(payload)
        }
    },

    getChatMessages: async (chatId) => {
        try {
            const response = await axios.get(`${urlBase}/auth/messages/${chatId}`, {
                headers: {
                    ...headers,
                    authorization: window.localStorage.getItem('token')
                }
            })

            return response.data
        }

        catch (error) {
            return messageControllerBackup.getChatMessages(chatId)
        }
    }
}

export default messageController