const urlBase = 'https://bla-bla-furg-backend.onrender.com'
const urlBaseBackup = 'https://bla-bla-furg-backend-backup.onrender.com'

const eventStreamUrlBase = 'https://bla-bla-furg-backend.onrender.com'
const eventStreamUrlBackup = 'https://bla-bla-furg-backend-backup.onrender.com'

const headers = { 
    'Content-Type': 'application/json', 
    'Authorization': `${window.localStorage.getItem('token')}`
}


export { headers, urlBase, urlBaseBackup, eventStreamUrlBackup, eventStreamUrlBase }