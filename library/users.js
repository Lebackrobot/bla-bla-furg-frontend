const getRandomUsername = () => {
    const usernames = [
        'Pedrinho',
        'Jotinha',
        'David',
        'Denys',
        'Rafinha',
        'Aline',
        'Ricardinho',
        'Lucas',
        'Fernanda',
        'Gustavo',
        'Luana',
        'Thiago',
        'Carolina',
        'Anderson',
        'Renata',
        'Bruno',
        'Maria',
        'Diego',
        'Juliana',
        'Roberto'
    ]

    return usernames[Math.floor(Math.random() * usernames.length)]
}

export { getRandomUsername }