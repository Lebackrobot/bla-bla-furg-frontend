import axios from 'axios'
import { headers, urlBaseBackup } from '../configs/axiosConfig'

const userControllerBackup = {
    getByNickname: async (nickname) => {
        try {
            const url = `${urlBaseBackup}/noauth/users/${nickname}`
            const response = await axios.get(url)

            return response.data
        }

        catch (error) {
            console.error(error)
            return error.response.data
        }
    }
}

export default userControllerBackup 