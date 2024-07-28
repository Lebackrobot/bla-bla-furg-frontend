import axios from 'axios'
import { urlBase, headers } from '../configs/axiosConfig'

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
            console.error(error)
            return error.response.data
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
            console.error(error)
            return error.response.data
        }
    }
}

export default messageController