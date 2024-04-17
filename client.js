import readline from 'readline'
import EventSource from 'eventsource'
import { getRandomUsername } from './library/users.js'


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const username = getRandomUsername()

const url = `http://localhost:4000/chat?username=${username}`;
const eventSource = new EventSource(url)



eventSource.onmessage = (event) => {
    const message = event.data;
    console.log(message);
}

eventSource.onopen = () => {
    console.log(`Conectado ao servidor SSE. Aguardando mensagens...`);
}

eventSource.onerror = (error) => {
    console.log(error)
    console.error(`SSE ERROR: ${error.message}`);
}


// Lidando com entrada do usuário
rl.on('line', input => {
    // Enviar mensagem ou fazer qualquer outra ação necessária
});

