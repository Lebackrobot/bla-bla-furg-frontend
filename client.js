import EventSource from 'eventsource'
import consoleInterface from './library/consoleInterface.js'
import { getRandomNickname } from './library/users.js'
import { serverEvents } from './config/server-events.js'
import backend from './apis/backend.js'


const nickname = getRandomNickname()
const endpoint = `http://localhost:4000/chat?nickname=${nickname}`
const eventSource = new EventSource(endpoint)

serverEvents(eventSource)


consoleInterface.on('line', message => {
    backend.sendMessage({ nickname, message })
})

