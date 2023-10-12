
/*Общая строка для всех примеров, которая считывает данные вписанные пользователем и преобразует их в массив чисел*/

function getNumbers() {
    return document.getElementById('userNumbers').value.split(',').map(Number);
}

/*Пример №1 - Напишите скрипт, который принимает массив чисел и возвращает сумму всех элементов*/

function sum() {
    let numbers = getNumbers();
    let sum = 0;

    for (let i =0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    let result = document.getElementById("box");
    result.innerHTML = "Сумма элементов: " + sum;
}

/*Пример №2 - Напишите скрипт, который принимает массив чисел и возвращает произведение всех элементов*/

function multiply() {
    let numbers = getNumbers();
    let multiply = 1;

    for (let i =0; i < numbers.length; i++) {
        multiply *= numbers[i]
    }
    let result = document.getElementById("box");
    result.innerHTML = "Произведение элементов: " + multiply;
}

/*Пример №3 - Напишите скрипт, который принимает массив чисел и возвращает новый массив, содержащий только четные числа.*/

function even() {
    let numbers = getNumbers();
    let evenNumbers = []; // Пустой массив для хранения четных чисел

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { // Проверка на четность
            evenNumbers.push(numbers[i]); // Добавляем четное число в массив
        }
    }

    let result = document.getElementById("box");
    result.innerHTML = "Четные числа: " + evenNumbers.join(', ');
}


/*Пример №4 - Напишите скрипт, которая принимает массив чисел и возвращает новый массив, содержащий только нечетные числа.*/

function odd() {
    let numbers = getNumbers();
    let oddNumbers = []; // Пустой массив для хранения четных чисел

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) { // Проверка на нечетность
            oddNumbers.push(numbers[i]); // Добавляем нечетное число в массив
        }
    }

    let result = document.getElementById("box");
    result.innerHTML = "Нечетные числа: " + oddNumbers.join(', ');
}

/*Пример №5 - Напишите скрипт, который принимает массив чисел и возвращает новый массив, содержащий только уникальные значения.*/

function unique() {
    let numbers = getNumbers();
    let uniqueNumbers = []; // Пустой массив для хранения уникальных чисел

    for (let i = 0; i < numbers.length; i++) {
        if (uniqueNumbers.findIndex(item => item == numbers[i]) == -1) { // Проверка на уникальность
            uniqueNumbers.push(numbers[i]); // Добавляем уникальное число в массив
        }
    }

    let result = document.getElementById("box");
    result.innerHTML = "Уникальные числа: " + uniqueNumbers.join(', ');
}

/*Пример №6 - Напишите скрипт, который принимает массив чисел и возвращает новый массив, содержащий только положительные числа.*/

function positive() {
    let numbers = getNumbers();
    let positiveNumbers = []; // Пустой массив для хранения положительных чисел

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) { // Проверка на положительность
            positiveNumbers.push(numbers[i]); // Добавляем положительное число в массив
        }
    }

    let result = document.getElementById("box");
    result.innerHTML = "Положительные числа: " + positiveNumbers.join(', ');
}

/*Пример №7 - Напишите скрипт, который принимает массив чисел и возвращает новый массив, содержащий только отрицательные числа.*/

function negative() {
    let numbers = getNumbers();
    let negativeNumbers = []; // Пустой массив для хранения положительных чисел

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) { // Проверка на положительность
            negativeNumbers.push(numbers[i]); // Добавляем положительное число в массив
        }
    }

    let result = document.getElementById("box");
    result.innerHTML = "Отрицательные числа: " + negativeNumbers.join(', ');
}

/*Пример №8 - Напишите скрипт, который принимает массив чисел и возвращает новый массив, содержащий только отрицательные числа.*/

function larger() {
    let numbers = getNumbers();
    let largerNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 3) { 
            largerNumbers.push(numbers[i]);
        }
    }

    let result = document.getElementById("box");
    result.innerHTML = "Числа больше трех: " + largerNumbers.join(', ');
}

/*Пример №9 - Напишите скрипт, который принимает массив чисел и возвращает новый массив, содержащий только числа, меньше заданного значения.*/

function under() {
    let numbers = getNumbers();
    let underNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 3) { 
            underNumbers.push(numbers[i]);
        }
    }

    let result = document.getElementById("box");
    result.innerHTML = "Числа меньше трех: " + underNumbers.join(', ');
}

/*Пример №10 - Напишите скрипт, которая принимает массив чисел и возвращает новый массив, содержащий только числа, стоящие на чётных позициях.*/


function evenPosition() {
    let numbers = getNumbers();
    let evenIndex = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 !== 0) { 
            evenIndex.push(numbers[i]); 
        }
    }

    let result = document.getElementById("box");
    result.innerHTML = "Числа на четных позициях: " + evenIndex.join(', ');
}
