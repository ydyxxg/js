let m = prompt('Выбирите номер задания от 1 до 10');
let a1 = 10,
    b = 2;
// let name = prompt('Введите своё имя'),
//     age = prompt('Введите свой возраст');
    // city = prompt('Введите свой город'),
    // phone = prompt('Введите своё телефон'),
    // email = prompt('Введите своё почту'),
    // company = prompt('Введите своё компанию'); 
if(m == 1){
   
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
else{
    alert('Нет такого номера задания')
}
