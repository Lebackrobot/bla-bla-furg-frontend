import net from 'net';
import readline from 'readline'
import { config } from 'dotenv'

import { getRandomNickname } from './utils/algorithms.js'

const consoleInterface = readline.createInterface({
    input: process.stdin,
    output: process.srdout
})

config()


const client = new net.Socket();

const connectClient = (client, nickname) => {
    client.connect(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
        const payload = JSON.stringify({
            header: 'CONNECTION_REQUEST',
            body: { nickname }
        })

        client.write(payload)
    })

    client.on('data', (response) => {
        response = JSON.parse(response)

        if (response.header == 'CLIENT_CONNECTION_RESPONSE') {
            console.log(response.body.message)

            const payload = JSON.stringify({
                header: 'JOIN_CHANNEL_REQUEST',
                body: { channel: '#general' }
            })

            client.write(payload)
        }

        if (response.header == 'SERVER_NOTIFY' || response.header == 'CLIENT_NOTIFY') {
            console.log(`${response.body.message}`)
        }
    })

    client.on('close', () => {
        console.log('Connection closed');
    })
}


const sendMessage = (client, message) => {
    const payload = JSON.stringify({
        header: 'CLIENT_MESSAGE_REQUEST',
        body: { message }
    })
    client.write(payload)
}

consoleInterface.on('line', (input) => {
    const message = input
    
    console.log(`\n▶️: ${message}`)
    sendMessage(client, message)
})

const nickname = getRandomNickname()
connectClient(client, nickname);

