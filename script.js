// console.log('Привет'); вывести на консоль

// let per1 = 123 переменная
// let per2 = 100
// per1 = 321 + 100 + per2 + per1 когда меняешь можно без let
// console.log(per1);
// let x = 10

// function fun1(a, b, c, d) {
//     console.log('Доброе утро');
//     return a+b
// }
// console.log(fun1(10, 20, 30, x));

// let forsum1 = 12
// let forsum2 = 20
// function summa(sum1, sum2) {
//     console.log(sum1 + sum2);

// }
// summa(12, 20)

// function raznost(sum1, sum2) {
//     return sum1 - sum2
// }
// console.log(raznost(30, 2));

function hi() {
    alert('Привет');
}

const btnhi = document.getElementById("btnhi");
btnhi.addEventListener('click', hi);

function Blue() {
    alert('Синий');
}

const bluesquare = document.getElementById("blue");
bluesquare.addEventListener('click', Blue);

function Red() {
    alert('Красный')
}
const redsquare = document.getElementById("red")
redsquare.addEventListener('click', Red)

function Green() {
    alert('Зелёный')
}
const greensquare = document.getElementById("green")
greensquare.addEventListener('click', Green)

const inp = document.getElementById("inp")
const btnval = document.getElementById("btnval")
const result = document.getElementById("result")
function valuebtn() {
    result.textContent += inp.value + ' '
    inp.value = ''
}
Number()
btnval.addEventListener('click', valuebtn)

const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const btnval2 = document.getElementById('btnval2')
const result2 = document.getElementById("result2")


function summa() {
    if (!((isNaN(inp1.value)) && (isNaN(inp2.value)))) {
        result2.textContent = Number(inp1.value) + Number(inp2.value)
        inp1.value = ''
        inp2.value = ''
    } else {
        result2.textContent = 'Введите числа',
            inp1.value = ''
        inp2.value = ''
    }
}
btnval2.addEventListener('click', summa)



// не - !
// и - &&
// или - ||
// присвоение - =
// сравнение  - ==
// ===  - жесткое сравнение
// (нельзя сравнивать разные типы данных)
const stor1 = document.getElementById('stor1')
const stor2 = document.getElementById('stor2')
const stor3 = document.getElementById('stor3')
const btnval3 = document.getElementById('btnval3')
const result3 = document.getElementById("result3")

function triangle() {
    let side1 = Number(stor1.value)
    let side2 = Number(stor2.value)
    let side3 = Number(stor3.value)
    if ((stor1.value === '') || (stor2.value === '') || (stor3.value === '')) {
        result3.textContent = 'Вы ничего не ввели'
    } else if ((((isNaN(side1)) || (isNaN(side2)) || (isNaN(side3))))) {
        result3.textContent = 'Введите числа'
    } else if (((side1 <= 0) || (side2 <= 0) || (side3 <= 0))) {
        result3.textContent = 'Введите числа больше нуля'
    } else if (((side1 + side2 < side3) || (side2 + side3 < side1) || (side1 + side3 < side2))) {
        result3.textContent = 'Такого треугольника не существует'
    } else if ((side1 === side2) && (side1 === side3) && (side3 === side2)) {
        result3.textContent = 'Это равносторонний треугольник'
    } else if ((side1 == side2) || (side2 == side3) || (side1 == side3)) {
        result3.textContent = 'Это равнобедренный треугольник'
    } else if ((side1 != side2) && (side1 != side3) && (side3 != side2)) {
        result3.textContent = 'Это разносторонний треугольник'
    }
    stor1.value = ''
    stor2.value = ''
    stor3.value = ''

}

btnval3.addEventListener('click', triangle)