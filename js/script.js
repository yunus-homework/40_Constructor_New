"use strict";

function Student(name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    this.attendance = new Array(10);
    this.rating = new Array(10);
}

//возраст студента
Student.prototype.getAgeStudent = function () {
    return new Date().getFullYear() - this.birthday;
};

//средний бал
Student.prototype.gradePointAverage = function () {
    let count = 0;
    const sum = this.rating.reduce(function (acc, el) {
        if (el !== undefined) {
            acc += el;
            count++;
        }
        return acc;
    }, 0);
    const result = sum / count;
    return +result.toFixed(1);
};

//индекс массива
Student.prototype.valueIndexAttendance = function () {
    return this.attendance.findIndex((element) => element === undefined);
};

//индекс массива true
Student.prototype.present = function () {
    if (this.valueIndexAttendance() <= 10 && this.valueIndexAttendance() >= 0) {
        return (this.attendance[this.valueIndexAttendance()] = true);
    } else {
        console.log("У вас только 10 занятий");
    }
};

//индекс массива false
Student.prototype.absent = function () {
    if (this.valueIndexAttendance() <= 10 && this.valueIndexAttendance() >= 0) {
        return (this.attendance[this.valueIndexAttendance()] = false);
    } else {
        console.log("У вас только 10 занятий");
    }
};

//передаем проверяем и записываем в массив оценку
Student.prototype.mark = function (value) {
    const valueIndexAppraisal = this.rating.findIndex(
        (element) => element === undefined
    );
    if (value > 11 || value <= 0) {
        console.log("Введите оценку от 1 до 10");
    } else if (valueIndexAppraisal >= 0 && valueIndexAppraisal <= 10) {
        return (this.rating[valueIndexAppraisal] = value);
    } else {
        console.log("У вас только 10 занятий");
    }
};

//информация успеваемости
Student.prototype.summary = function () {
    const lessonsEnded = [0, 0];

    for (let i = 0; i < this.attendance.length; i++) {
        if (this.attendance[i] !== undefined) {
            lessonsEnded[0]++;
        }
        if (this.attendance[i]) {
            lessonsEnded[1]++;
        }
    }

    const averageVisit = +(lessonsEnded[1] / lessonsEnded[0]).toFixed(1);

    if (this.gradePointAverage() >= 9 && averageVisit >= 0.9) {
        return "Ути какой молодчинка!";
    } else if (
        (this.gradePointAverage() < 9 && averageVisit >= 0.9) ||
        (this.gradePointAverage() >= 9 && averageVisit < 0.9)
    ) {
        return "Норм, но можно лучше";
    }
    return "Редиска!";
};

const newStudent = new Student("Johny", "Depp", 1970);

newStudent.absent();
newStudent.absent();
newStudent.absent();
newStudent.present();
newStudent.present();
newStudent.present();
newStudent.mark(10);
newStudent.mark(4);
newStudent.mark(3);

console.log(newStudent.getAgeStudent());
console.log(newStudent.summary());
console.log(newStudent);

const newStudent2 = new Student("Nicole", "Kidman", 1990);

newStudent2.absent();
newStudent2.absent();
newStudent2.absent();
newStudent2.present();
newStudent2.present();
newStudent2.present();
newStudent2.mark(10);
newStudent2.mark(9);
newStudent2.mark(8);

console.log(newStudent2.getAgeStudent());
console.log(newStudent2.summary());
console.log(newStudent2);

// Вам нужно сделать конструктор сущности Студент.

// У Студента есть имя, фамилия, год рождения - это свойства.

// И есть возможность получить возраст студента и его средний балл - это методы.

// Еще у всех Студентов есть по 2 массива одинаковой длины, в них 10 элементов, изначально они не заполнены, но на 10 элементов.
//  массив, в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое место в массив
// записывается true, когда вызываем .absent() - записывается false и второй - массив с оценками и метод mark(), мы можем передать
// оценку от 0 до 10. Длина тоже фиксированная

// Предусмотрите какую-нибудь защиту от того, чтобы в массивах не могло быть более 10 записей. Массив - это свойство, present,
// absent и mark - методы.

// Ну и последний метод .summary(): он проверяет среднюю оценку и среднее посещение, и если средняя оценка больше 9, а среднее
// посещение больше 0.9, то метод summary возвращает строку "Ути какой молодчинка!", если одно из этих значений меньше, то "Норм,
// но можно лучше", если оба ниже - "Редиска!". Ну и не забудьте после того, как напишите замечательный конструктор, создать пару
// экземпляров (конкретных студентов) и подергать методы.

// Не используйте push - он вам тут не друг) Вам нужно искать индекс ближайшего пустого места в массиве и перезаписывать)

// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert(rabbit.eats);

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += +prompt("Сколько нужно добавить?", 0);
//     };
// }

// let accumulator = new Accumulator(2);

// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// function Calculator() {
//     this.read = function () {
//         this.a = +prompt("a?", 0);
//         this.b = +prompt("b", 0);
//     };

//     this.sum = function () {
//         return this.a + this.b;
//     };

//     this.mul = function () {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();

// calculator.read();

// alert("Sum= " + calculator.sum());
// alert("Mul= " + calculator.mul());

// function User(name) {
//     this.name = name;
// }

// User.prototype.getName = function () {
//     return this.name;
// };

// let user = new User("Goldman");

// console.log(User.prototype);
// console.log(User);
// console.log(user);
