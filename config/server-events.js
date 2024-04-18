const serverEvents = (eventSource) => {
    eventSource.onmessage = (event) => {
        const message = event.data;
        console.log(message);
    }
    
    eventSource.onopen = () => {
        console.log(`Connected to server SSE. Waiting for messages...`);
    }
    
    eventSource.onerror = (error) => {
        console.error(`SSE ERROR: ${error.message}`);
    }
}


export { serverEvents }