/* 1. Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ будет равен элементу массива, а значение (элемент * 100)
input: [1, 2, 3, 4, 5]
output: {1: 100, 2: 200, 3: 300 ...} */

// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((acc, num) => {
//   acc[num] = num * 100;
//     return acc;
// }, {});

// console.log(result);


/* 2. Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать. 
Написать функцию которая создает из массива skills объект с рандомными значениями от 1 до 100, использовать reduce и Math.random()
input: ['hook', 'blackhole']
output: {'hook': 20, 'blackhole: 100'} */

// const createRandomSkillsObject = (skills) => {
//   return skills.reduce((acc, skill) => {
//     acc[skill] = Math.floor(Math.random() * 100) + 1;
//     return acc;
//   }, {});
// };

// const skillsArray = ['hook', 'blackhole'];
// const skillsObject = createRandomSkillsObject(skillsArray);
// console.log(skillsObject);

/* 3. Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
output: { even: 100, odd: 100 } // 100 это для примера, сумма должна высчитываться.
 */

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 200, 300];
// const result = numbers.reduce((acc, current) => {
//         if (current % 2 === 0) {
//             acc.even += current;
//         } else {
//             acc.odd += current;
//         }
//         return acc;
// }, { even: 0, odd: 0});
// console.log(result);

/* 4. Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, { name: 'Cedric Diggory', house: 'Hufflepuff' }, { name: 'Tonks', house: 'Hufflepuff' }, { name: 'Ronald Weasley', house: 'Gryfindor' }, { name: 'Hermione Granger', house: 'Gryfindor' }]; Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа. Сделайте эту задачу двуми способоами:
C помощью filter и map
C помощью reduce */


// const wizards = [
//     { name: 'Harry Potter', house: 'Gryfindor' },
//     { name: 'Cedric Diggory', house: 'Hufflepuff' },
//     { name: 'Tonks', house: 'Hufflepuff' },
//     { name: 'Ronald Weasley', house: 'Gryfindor' },
//     { name: 'Hermione Granger', house: 'Gryfindor' }
// ];

// // Способ 1: С помощью filter и map
// const hufflepuffWizardsMap = wizards.filter(wizard => wizard.house === 'Hufflepuff').map(wizard => wizard.name);
// console.log(hufflepuffWizardsMap); // ['Cedric Diggory', 'Tonks']

// // Способ 2: С помощью reduce
// const hufflepuffWizardsReduce = wizards.reduce((acc, current) => {
//     if (current.house === 'Hufflepuff') {
//         acc.push(current.name);
//     }
//     return acc;
// }, []);
// console.log(hufflepuffWizardsReduce); // ['Cedric Diggory', 'Tonks']

/* 5.  Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
От большего к меньшему
От меньшего к большему */

// const numbers = [3, 4, 1, 2, 7];

// // От большего к меньшему
// const sortedDescending = numbers.slice().sort((a, b) => b - a);
// console.log(sortedDescending); // [7, 4, 3, 2, 1]

// // От меньшего к большему
// const sortedAscending = numbers.slice().sort((a, b) => a - b);
// console.log(sortedAscending); // [1, 2, 3, 4, 7]

/* 6. Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки: 
От A-Z
От Z-A */

const strings = ['apple', 'banana', 'cherry', 'date', 'fig'];

// От A-Z
const sortedAZ = strings.slice().sort();
console.log(sortedAZ); // ['apple', 'banana', 'cherry', 'date', 'fig']

// От Z-A
const sortedZA = strings.slice().sort((a, b) => b.localeCompare(a));
console.log(sortedZA); // ['fig', 'date', 'cherry', 'banana', 'apple']