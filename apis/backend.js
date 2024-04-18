import axios from 'axios'

const backend = {
    sendMessage: async (payload) => {
        try {
            await axios.post('http://localhost:4000/chat', payload)
        }

        catch(error) {
            console.error(error)
        } 
    }
}

export default backend