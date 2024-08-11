const urlBase = 'https://bla-bla-furg-backend.onrender.com'
const eventStreamUrlBase = 'https://bla-bla-furg-backend.onrender.com'
const headers = { 
    'Content-Type': 'application/json', 
    'Authorization': `${window.localStorage.getItem('token')}`
}


export { headers, urlBase, eventStreamUrlBase }