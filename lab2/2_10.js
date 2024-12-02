const user = {
     'Artem' : '+380688390547' ,
     'Danil' :  '+380639393177' ,
     'Kirill' : '+380669841574'
}

const findPhoneByName = (name) => {
    console.log(user[name]);
}

findPhoneByName('Kirill');