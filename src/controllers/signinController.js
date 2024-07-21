import axios from 'axios'
import { header, urlBase } from '../configs/axiosConfig'

const signController = {
    signin: async (payload) => {
        try {
            const url = `${urlBase}/noauth/signin`
            const response = await axios.post(url, payload, header)
            return response.data

        }

        catch (error) {
            console.error(error)
            return error.response.data
            
        }
    },

    signup: async (payload) => {
        try {
            const url = `${urlBase}/noauth/signup`
            const response = await axios.post(url, payload, header)
            return response.data
        }

        catch (error) {
            console.error(error)
            return error.response.data

        }
    },

    makeAvatar: async () => {
        try {
            const url = `${urlBase}/noauth/signup/make-avatar`
            const response = await axios.get(url)
            return response.data

        }

        catch (error) {
            console.error(error)
            return error.response.data

        }
    }
}

export default signController