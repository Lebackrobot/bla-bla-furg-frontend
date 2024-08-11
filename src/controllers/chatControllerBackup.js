import axios from 'axios'
import { urlBaseBackup, headers } from '../configs/axiosConfig'

const chatControllerBackup = {
    get: async () => {
        try {
            const url = `${urlBaseBackup}/noauth/rooms`
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
            const url = `${urlBaseBackup}/auth/rooms/member`
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

    create: async (payload) => {
        try {
            const url = `${urlBaseBackup}/auth/rooms`
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
    }
}

export default chatControllerBackup