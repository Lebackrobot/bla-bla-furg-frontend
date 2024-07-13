import axios from 'axios'

const backend = {
    sendMessage: async (payload, token) => {
        const config = { headers: { 'Authorization': token, 'Content-Type': 'application/json' }}

        try {
            await axios.post('http://localhost:4000/auth/messages', payload, config)
        }

        catch(error) {
            console.error(error)
        } 
    }
}

export default backend