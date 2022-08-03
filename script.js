// //1
// let str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!'));

// //2
// let str = '2025-12-31';
// var arr = str.split('-');
// var newStr = arr[2] + '/' + arr[1] + '/' + arr[0];
// console.log(newStr);

// //3
// let str = 'Я учу javascript!'
// console.log(str.substr(2, 14)); 
// console.log(str.substring(2, 16)); 
// console.log(str.slice(2, 16)); 

// //4
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// let kor = 0;
// for (let i = 0; i < arr.length; i++)
//     sum += arr[i] ** 3;
//     kor = Math.sqrt(sum);
// console.log(sum);
// console.log(kor);

// //5
// let a = prompt('Введите a'),
//     b = prompt('Введите b'),
//     с = Math.abs(a-b);
// console.log(с);

// //6
// let date = new Date();
// function getZero(num){
// 	if (num > 0 && num < 10) { 
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }
// console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());

// //7
// var str = 'aa aba abba abbba abca abea'.replace(/ab+a/g, '!');
// console.log(str);

//8 
ValidateUSPhoneNumber('+ 375 (29) 432-37-51');
function ValidateUSPhoneNumber(phoneNumber) {
    var reg = /^[+]\ [\d]{3} \([\d]{2}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/;
    var phone = phoneNumber.match(reg);
    if (phone) {
      console.log('yes');
      return true;
    }
    console.log('no');
    return false;
  }