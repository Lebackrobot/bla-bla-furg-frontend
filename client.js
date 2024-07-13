import EventSource from 'eventsource'
import consoleInterface from './library/consoleInterface.js'
import { getRandomNickname } from './library/users.js'
import { serverEvents } from './config/server-events.js'
import backend from './apis/backend.js'


const nickname = getRandomNickname()
const endpoint = `http://localhost:4000/auth/event-stream`
const eventSource = new EventSource(endpoint, {
    headers: { authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNDk3MTc3NSwiZXhwIjoxNzE1MTQ0NTc1fQ.dsbHBtaLuMTJD__DBuuiqpxp8CezUb4OgO-kAuyGOWI' }
})


serverEvents(eventSource)


consoleInterface.on('line', message => {
    backend.sendMessage({ nickname, message })
})
