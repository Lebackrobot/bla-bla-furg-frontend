import axios from 'axios'
import { urlBase, urlBaseBackup, headers } from '../configs/axiosConfig'
import chatControllerBackup from './chatControllerBackup'

const chatController = {
    get: async () => {
        try {
            const url = `${urlBase}/noauth/rooms`
            const response = await axios.get(url)
            return response.data
        }

        catch (error) {
            return chatControllerBackup.get()
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
            return chatControllerBackup.addMember(payload)
        }
    },

    create: async (payload) => {
        try {
            const url = `${urlBase}/auth/rooms`
            const response = await axios.post(url, payload, {
                headers: {
                    ...headers,
                    authorization: window.localStorage.getItem('token')
                }
            })
            return response.data
        }

        catch (error) {
            return chatControllerBackup.create(payload)
        }
    }
}

export default chatController