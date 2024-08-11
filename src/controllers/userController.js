import axios from 'axios'
import { headers, urlBase } from '../configs/axiosConfig'

const userController = {
    getByNickname: async (nickname) => {
        try {
            const url = `${urlBase}/noauth/users/${nickname}`
            const response = await axios.get(url)

            return response.data
        }

        catch (error) {
            console.error(error)
            return error.response.data
        }
    }
}

export default userController 