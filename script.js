// //Zad1
// for(let i = 1; i <= 50; i++){
//     console.log(i);
// }
// console.log('----------------------------')
// for(i = 35; i >= 8; i--){
//     console.log(i);
// }

// //Zad2
// console.log('--------------------Zad2-----------------------')
// i = 89;
// while(i >= 11){
//     document.write(i + '<br>');
//     i--;
// }

// //Zad3
// console.log('--------------------Zad3-----------------------')
// let sum = 0;
// for(let i = 0; i <= 100; i++){
//     sum += i;
// }
// console.log(sum);

// //Zad4
// console.log('--------------------Zad4-----------------------')
// let a = 5,
//     b = (a * (a + 1)) / 2;
// for(let i = 1; i <= a; i++){
//     console.log(b);
// }

// // Zad5
// console.log('--------------------Zad5-----------------------');
// for(let p = 8; p <= 56; p++){
    
//     if(p % 2 == 0){
//         console.log(p);
//         p++;
//      } 
// }
// console.log('-------------------------------------------');
// let c = 8;
// while(c <= 56){

//     if(c % 2 == 0){
//        console.log(c);
//         c++;
//     }   
// }

// // Zad6
// console.log('--------------------Zad6-----------------------');
// for(let i = 2; i <= 10; i++){
//     for(let k = 2; k <= 10; k++){
//         console.log(i, '*', k, '=',k * i);
//     }
//     console.log("");
// }

// // Zad7
// console.log('--------------------Zad7-----------------------');
// let n = 1000,
//     num = 0;
// while(n > 50){
//     num++;
//     n /=2;
// };
// console.log(n);
// console.log(num);

// // Zad8
// console.log('--------------------Zad8-----------------------');
// let i = 0,
//     s = 0;
//     ch = 0;
// ch = prompt( "Введите число", 0 );
 
// while ((ch != 0) && (ch != null)) {
// i = i + 1;
// s = s + ch;
// ch = prompt( "Введите ещё число" );
// }
 
// console.log( "Чисел введено: " + i ); 
// console.log( "Сумма чисел: " + s );         // s после цикла присваивается тип данных string!!!
// console.log( "Среднее арифметическое: " + (s/i) );

// // Zad9
// console.log('--------------------Zad9-----------------------');
// let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
//     arr = str.split(' '),
//     min = arr[0], max = arr[0];
  
// for (let i = 0; i < arr.length; i++) {
// if( arr[i] < min ) min = arr[i]; 
// if( arr[i] > max ) max = arr[i]; 
// }

// console.log('min =', min,'max =', max);

// Zad10
console.log('--------------------Zad10-----------------------');
let number = prompt('введите число'),
    number_create;
    if (number<0){ //делаем число положительным
        number *=-1; 
    }
    for (;number>0;number /=10){
        number_create = number%10;
    }