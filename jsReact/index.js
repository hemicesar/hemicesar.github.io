import {addFunction, titleFunction, multiply, mark} from './add.js'
console.log(addFunction(30, 30))
console.log(titleFunction)
console.log(mark)
console.log(multiply(5, 8, 10))
//import {addModule} from './add.js'
//console.log(addModule())


import addModule from './add.js'
console.log(addModule)

function hello() {
    console.log('hola mundo')
    console.log('hola mundo')
    return 3.1415926
}

hello()

const result = hello()
console.log()
console.log(hello())


function add(x, y){
    if (y === undefined) {
        y = 0
    }
    return x + y;
}

console.log(add(10, 20));


function addSuper(x = 0, y = 0){
    return x + y;
}

console.log(addSuper(100));


const user = {
    name: 'goku',
    saiyajin: 2,
    address: {
        country: 'Mx', 
        state: 'Hidalgo',
    },
    friends: ['vegeta', 'piccolo', 'kurilin'],
    active: true,
    sendMail() {
        return 'sending enail...'
    }

}

console.log (user)
console.log (user.name)
console.log (user.saiyajin)
console.log (user.address.country)
console.log (user.sendMail())


/*+++++++++++++++++++++++++++++++++++++++++++++++++ */

const title = document.createElement('h1')
title.innerText = 'Hola mundo desde JS'

const button = document.createElement('button')
button.innerText = 'click'


document.body.append(title)
document.body.append(button)


button.addEventListener('click', function (){  
    
    title.innerText = 'Texto actualizado con JS'
    console.log('Hoooolis!')
    alert('Se realizó un click!')
})


const user1 = {
    name: 'Cesin',
    age: 30
}

function printInfo(x) {
    return '<h1> Hello ' + user1.name +'! </h1>'
}

console.log(printInfo(user1))

document.body.innerHTML = printInfo(user)


const button1 = document.createElement('button')
button1.innerText = 'click me'

button1.addEventListener('click', function(){
    alert('clicked!')
})

document.body.append(button1)

/**IN LINE ARROW FUNCTIONS */

const showText = () => 'Hi my world'
const showNumber = () => 33;
const showBoolean = () => true;
const showArray = () => [1, 2, 3, 4]
const showObject = () => ({name: 'Ryan', 
age: 42, occupation: 'student'})

console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())


/**INCLUYING STYLES WITH JS */
const background = 'red'
const color = 'blue'
const isAuthorized = true;

const button2 = document.createElement("button");
button2.innerText = 'click me now!';
button2.style = `background: ${isAuthorized ? 'lightgreen' : 'skyblue' }; color: ${color}`


button2.addEventListener("click", () => {
    if (isAuthorized){
        return alert("You're Authorized!");
    }
    alert("You're not Authorized! :(");
});

document.body.append(button2);


/**ARRAYS IN JS */

const names = ['bart', 'homer', 'lisa']

//for (let i = 0; i < names.length; i++) {
//    const element = names[i];
//    console.log(element)
//}

/**VERSIÓN EMPLEANDO MÉTODO FOR EACH */
names.forEach(function (name){
    console.log(name)
})

/**FUNCIÓN QUE NOS PERMITE RECORRER ARREGLOS */
const newNames = names.map(function(name){
    return `Hola ${name} the great!`
})

console.log(names)
console.log(newNames)

/**FUNCIÓN QUE NOS PERMITE ENCONTRAR ELEMENTOS */
const nameFound = names.find(function(name){
    if (name === 'joe'){
        return `Hola ${name} the great!`
    }
})

console.log(nameFound)

/**FUNCIÓN QUE NOS PERMITE FILTRAR ELEMENTOS */
const namesFiltered = names.filter(function(name){
    if (name !== 'joe'){
        return `Added ${name} to the list!`
    }
})

console.log(namesFiltered)

console.log([...names, ...newNames])
/**TBN PODEMOS CONCATENAR OBJETOS */

const user3 = {
    name: 'John',
    surname: 'Whick'
}

const address = {
    street: 'Main Avenue 321',
    city: 'London'
}

const userInfo = {
    ...user3,
    ...address
}

console.log(userInfo)


/**ECMA SCRIPT MODULOS ES LA PROPIEDAD DE DIVIDIR LA APP EN VARIOS ARCHIVOS */



/**IMPORTANDO DATOS DESDE UN SERVIDOR */

/**
 * fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(){
        console.log('Finalizó la carga')
    })

console.log('A que lees esto primero!')

const ol = document.createElement('ol')

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data);
        data.forEach(function(post) {
            const li = document.createElement('li');
            li.innerText = post.title;
            ol.append(li);
        });
        document.body.append(ol);
    });

console.log('Estamos trabajando en ello...');
 */



const ul = document.createElement('ul')

async function loadData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    //console.log(data)
    data.forEach(function(post) {
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    });
}

loadData()
document.body.append(ul);