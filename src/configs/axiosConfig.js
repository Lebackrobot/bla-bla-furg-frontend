const urlBase = 'http://localhost:4000'
const eventStreamUrlBase = 'http://localhost:4000'
const headers = { 
    'Content-Type': 'application/json', 
    'Authorization': `${window.localStorage.getItem('token')}`
}


export { headers, urlBase, eventStreamUrlBase }