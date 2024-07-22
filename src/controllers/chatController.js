import axios from 'axios'
import { header, urlBase } from '../configs/axiosConfig'

const chatController = {
    get: async () => {
        try {
            const url = `${urlBase}/noauth/chats`
            const response = await axios.get(url)
            return response.data

        }

        catch (error) {
            console.error(error)
            return error.response.data

        }
    }
}

export default chatController