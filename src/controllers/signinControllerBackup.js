import axios from 'axios'
import { headers, urlBaseBackup } from '../configs/axiosConfig'

const signControllerBackup = {
    signin: async (payload) => {
        try {
            const url = `${urlBaseBackup}/noauth/signin`
            const response = await axios.post(url, payload, headers)
            return response.data

        }

        catch (error) {
            console.error(error)
            return error.response.data

        }
    },

    signup: async (payload) => {
        try {
            const url = `${urlBaseBackup}/noauth/signup`
            const response = await axios.post(url, payload, headers)
            return response.data
        }

        catch (error) {
            console.error(error)
            return error.response.data

        }
    },

    makeAvatar: async () => {
        try {
            const seedResponse = await axios.get(`${urlBaseBackup}/noauth/picture-seed`)
            const avatarResponse = await axios.get(`https://api.dicebear.com/9.x/adventurer/svg?seed=${seedResponse.data.info.seed}`)


            const seed = seedResponse.data.info.seed
            const avatar = avatarResponse.data

            return { success: true, info: { seed, avatar } }
        }

        catch (error) {
            console.error(error)
            return error.response.data

        }
    },

    makeAvatarV2: async (seed) => {
        try {
            const url = `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`
            const response = await axios.get(url)
            return response.data
        }

        catch (error) {
            console.error(error)
            return error.response.data

        }
    }
}

export default signControllerBackup