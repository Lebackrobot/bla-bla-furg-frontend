import axios from 'axios'
import { headers, urlBase } from '../configs/axiosConfig'
import userControllerBackup from './userControllerBackup'

const userController = {
    getByNickname: async (nickname) => {
        try {
            const url = `${urlBase}/noauth/users/${nickname}`
            const response = await axios.get(url)

            return response.data
        }

        catch (error) {
            return userControllerBackup.getByNickname(nickname)
        }
    }
}

export default userController 