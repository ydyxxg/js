//1
// let mas = [1, 2, 3, 4, 5];
// for(let i = 0; i <= mas.length; i++){
//     console.log(mas[i]);
// }

//2
// let mas = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
// for(let i = 0; i <= mas.length; i++){
//     if(mas[i] > -10 && mas[i] < -3){
//         console.log(mas[i]);
//     }
// }

//3
// let mas = [];
//     sum = 0;
// for (let i = 23; i <= 57; i++ ) {
//     mas.push(i);
//     sum += i;
// }
// console.log(mas);   
// console.log(sum); 

// let a = 23;
//     mas1 =[];
// while(a < 58){
//     mas1.push(a);
//     a++
// }
// console.log(mas1);

//4
// let arr = ['10', '20', '30', '50', '235', '3000'];
// console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])));

//5
let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
 
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'сб' || arr[i] == 'вс') {
        document.write(arr[i] + '<b>' + ' ');
    } else {
        document.write(arr[i] + ' ');
    }
 
}