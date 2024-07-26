import axios from 'axios'
import { urlBase, header } from '../configs/axiosConfig'

const messageController = {
    create: async (payload) => {
        try {
            const url = `${urlBase}/auth/messages`
            const response = await axios.post(url, payload, {
                headers: {
                    ...header,
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
}

export default messageController