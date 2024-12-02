const fn = () => {
    const object1 = {
        name: 'Nikita'
    }

    let object2 = {
        name: 'Nikita'
    }
    object1.name = 'other';
    object2.name = 'other';

    console.log(object1);
    console.log(object2);

     /* object1 = { name: 'Тik' }; видає помилку, 
     бо можна змінити значення поля, але не записати посилання на інший об'єкт  */
     object2 = { name: 'Nik' };

     console.log(object1);
     console.log(object2);
}

fn();