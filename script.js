let Contacts = function (name, age, phone, Email) {

    this.get = function () {
        this.name = prompt('name');
        this.age = prompt('age');
        this.phone = prompt('phone');
        this.Email = prompt('Email');

        this.operation();
    };

    this.operation = function(){
        
        if(this.age < 0 || this.age > 110){
            this.age ='Ошибка. Возраст введён некорректно';
        }
        
        
        var reg = /^[+]\ [\d]{3} \([\d]{2}\)\ [\d]{3}-[\d]{2}-[\d]{2}$/;
        var phone = this.phone.match(reg);
        if (phone) {
            this.phone = phone;
        }else{
            this.phone = 'Ошибка. Телефон введён некорректно'; 
        }    

        

        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        var em = this.Email.match(re);
        if (em) {
            this.Email = em;
        }else{
            this.Email = 'Ошибка. Почта введена некорректно'; 
        } 
        this.show();
    };

    this.show = function () {
        console.log('ФИО: ' + this.name +' '+ 'Возраст: ' + this.age +' ' + 'Телефон: ' + this.phone +' ' + 'Почта: ' + this.Email);
    };
    
};
let contacts_1 = new Contacts();
contacts_1.get();

