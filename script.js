let m = prompt('Выбирите номер задания от 1 до 10');
let day = prompt('Введите число');
let a1 = 10,
    b = 2;
    // name = prompt('Введите своё имя'),
    // age = prompt('Введите свой возраст');
if(m == 1){
  let city = prompt('Введите свой город'),
    phone = prompt('Введите своё телефон'),
    email = prompt('Введите своё почту'),
    company = prompt('Введите своё компанию');  
  console.log('Меня зовут', name, '.Мне', age,'лет. Я проживаю в городе', city,'и работаю в компании', company, '. Мои контактные данные:', phone, ',', email);  
}
else if(m == 2){
    var now = new Date();
    let year = now.getUTCFullYear() - age;
console.log(name,'родил(ась)ся в', year, 'году.')
}
else if(m == 3){
    let str = '123456',
        sum1 = Number(str[0]) + Number(str[1])  + Number(str[2]) ,
        sum2 = Number(str[3])  + Number(str[4])  + Number(str[5]) ;
    if(sum1 == sum2){
        console.log('да');
    }
    else{
        console.log('нет');
    }
}
else if(m == 4){
    let a = prompt('Введите число');
    if(a > 0){
        console.log('Верно');
    }
    else{
        console.log('Неверно');
    }
}
else if(m == 5){
    let sum = a1 + b,
        raz = a1 - b,
        pro = a1 * b,
        cha = a1 / b;
        console.log('Сумма:',sum);
        console.log('Разность:',raz);
        console.log('Произведение:',pro);
        console.log('Частное:',cha);
        console.log('--------------------------');
    if(sum > 1){
        sum+=2;
        console.log(sum);
    }
}
else if(m == 6){
    if(a1 > 2 && a1 < 11 || b >= 6 && b < 14){
        console.log('Верно');
    }
    else{
        console.log('Неверно');
    }
}
else if(m == 7){
    let n = prompt('Введите число от 0 до 59');
    if (n >= 0 && n <= 14) {
        console.log('В первую четверть.');
    }
    if (n >= 15 && n <= 30) {
        console.log('Во вторую четверть.');
    }
    if (n >= 31 && n <= 45) {
        console.log('В третью четверть.');
    }
    if (n >= 46 && n <= 59) {
        console.log('В четвертую четверть.');
    }
}
else if(m == 8){
    if(day >= 1 && day <= 10){
        console.log('В первую декаду.');
    }
    else if(day >= 11 && day <= 20){
        console.log('В вторую декаду.');
    }
    else if(day >=21 && day <=31){
        console.log('В третью декаду.');
    }
    else{
        console.log('Число должно быть в промежутке от 1 до 31');
    }
}
else if(m == 9){
    let dny = prompt('Введите количнство дней');
        god = dny / 365;
        mes = dny / 31;
        ned = dny / 7;
        chas = dny * 24;
        min = dny * 24 * 60;
        sec = dny * 24 * 60 * 60;
        console.log('Количество дней',dny);
        console.log('Количество лет',god);
        console.log('Количество месяцев',mes);
        console.log('Количество недель',ned);
        console.log('Количество часов',chas);
        console.log('Количество минут',min);
        console.log('Количество секунд',sec);
}
else if(m == 10){
    let num;
    if(day >= 1 && day <= 31){
        num = 1;
        console.log('Январь');
    }
    else if(day >= 31 && day <= 59){
        num = 2;
        console.log('Февраль');
    }
    else if(day >= 60 && day <= 90){
        num = 3
        console.log('Март');
    }
    else if(day >= 91 && day <= 120){
        num = 4
        console.log('Апрель');
    }
    else if(day >= 121 && day <= 151){
        num = 5
        console.log('Май');
    }
    else if(day >= 152 && day <= 181){
        num = 6
        console.log('Июнь');
    }
    else if(day >= 182 && day <= 212){
        num = 7
        console.log('Июль');
    }
    else if(day >= 213 && day <= 243){
        num = 8
        console.log('Август');
    }
    else if(day >= 244 && day <= 273){
        num = 9
        console.log('Сентябрь');
    }
    else if(day >= 274 && day <= 304){
        num = 10
        console.log('Октябрь');
    }
    else if(day >= 305 && day <= 334){
        num = 11
        console.log('Ноябрь');
    }
    else if(day >= 335 && day <= 365){
        num = 12;
        console.log('Декабрь');
    }

    switch(num){
        case 1:
        case 2:
        case 12:
            console.log('Зима');
            break;
        case 3:
        case 4:
        case 5:
           console.log('Весна'); 
           break;
        case 6:
        case 7:
        case 8:
           console.log('Лето');
           break;
        case 9:
        case 10:
        case 11:
           console.log('Осень');
           break;
           default:
    alert('Что-то пошло не так'); 
    }
}
else{
    alert('Нет такого номера задания')
}

