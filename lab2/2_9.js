const array = [
    { name: 'Artem', phone: '+380688390547' },
    { name: 'Danil', phone: '+380639393177' },
    { name: 'Kirill', phone: '+380669841574' }
]

const findPhoneByName = (name) => {
    for (const user of array) {
        if (user.name === name) {
            console.log(user.phone);
        }
    }
}

findPhoneByName('Danil');