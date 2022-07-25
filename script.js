//Zad1
for(let i = 1; i <= 50; i++){
    console.log(i);
}
console.log('----------------------------')
for(i = 35; i >= 8; i--){
    console.log(i);
}

//Zad2
console.log('--------------------Zad2-----------------------')
i = 89;
while(i >= 11){
    document.write(i + '<br>');
    i--;
}

//Zad3
console.log('--------------------Zad3-----------------------')
let sum = 0;
for(let i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum);

//Zad4
console.log('--------------------Zad4-----------------------')
let a = 5,
    b = (a * (a + 1)) / 2;
for(let i = 1; i <= a; i++){
    console.log(b);
}

// Zad5
console.log('--------------------Zad5-----------------------');
for(let p = 8; p <= 56; p++){
    
    if(p % 2 == 0){
        console.log(p);
        p++;
     } 
}
console.log('-------------------------------------------');
let c = 8;
while(c <= 56){

    if(c % 2 == 0){
       console.log(c);
        c++;
    }   
}

// Zad6
console.log('--------------------Zad6-----------------------');
for(let i = 2; i <= 10; i++){
    for(let k = 2; k <= 10; k++){
        console.log(i, '*', k, '=',k * i);
    }
    console.log("");
}

// Zad7
console.log('--------------------Zad7-----------------------');
let n = 1000,
    num = 0;
while(n > 50){
    num++;
    n /=2;
};
console.log(n);
console.log(num);

// Zad8
console.log('--------------------Zad8-----------------------');