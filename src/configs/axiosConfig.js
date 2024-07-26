const urlBase = 'http://localhost:4000'
const header = { 
    'Content-Type': 'application/json', 
    'Authorization': `${window.localStorage.getItem('token')}`
}

export { header, urlBase }