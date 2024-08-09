import axios from 'axios'
import { urlBase, headers } from '../configs/axiosConfig'

const chatController = {
    get: async () => {
        try {
            const url = `${urlBase}/noauth/rooms`
            const response = await axios.get(url)
            return response.data

        }

        catch (error) {
            console.error(error)
            return error.response.data

        }
    },


    addMember: async (payload) => {
        try {
            const url = `${urlBase}/auth/rooms/member`
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
}

export default chatController