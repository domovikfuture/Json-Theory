"use strict";

//json - формат данных, набор пар ключ-значение
//можно получить небольшую реляционную бд
//json нужен для того, чтобы интерпретировать допустим обьект и отправить его на сервер
//без этого сервер нас не поймет

const person = {
    name: 'Alex',
    tel: '+7439425'
};

console.log(JSON.stringify(person));
//все сущности записаны в кавычки, одинарные превращаются в двойные

console.log(JSON.parse(JSON.stringify(person)));
//конвертация обратно, то есть в обычный объект

const clonexample = {
    name: 'Alex',
    tel: '+7439425',
    parents: {
        mom: 'Olga',
        father: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(clonexample));
//глубокая копия, клон
clone.parents.mom ='Ann';
console.log(clonexample);
console.log(clone);
//поменялся только клон, но не clonexample































