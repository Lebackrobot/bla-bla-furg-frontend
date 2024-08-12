import axios from 'axios'
import { headers, urlBase } from '../configs/axiosConfig'
import signControllerBackup from './signinControllerBackup'

const signController = {
    signin: async (payload) => {
        try {
            const url = `${urlBase}/noauth/signin`
            const response = await axios.post(url, payload, headers)
            return response.data

        }

        catch (error) {
            return signControllerBackup.signin(payload)
        }
    },

    signup: async (payload) => {
        try {
            const url = `${urlBase}/noauth/signup`
            const response = await axios.post(url, payload, headers)
            return response.data
        }

        catch (error) {
            return signControllerBackup.signup(payload)
        }
    },

    makeAvatar: async () => {
        try {
            const seedResponse = await axios.get(`${urlBase}/noauth/picture-seed`)
            const avatarResponse = await axios.get(`https://api.dicebear.com/9.x/adventurer/svg?seed=${seedResponse.data.info.seed}`)


            const seed = seedResponse.data.info.seed
            const avatar = avatarResponse.data

            return { success: true, info: { seed, avatar }}
        }

        catch (error) {
            return signControllerBackup.makeAvatar()
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

export default signController