const getRandomNickname = () => {
    const nicknames = [
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

    return nicknames[Math.floor(Math.random() * nicknames.length)]
}

export { getRandomNickname }