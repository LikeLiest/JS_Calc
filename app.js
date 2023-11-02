const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const plusBtn = document.getElementById('plus')
const minBtn = document.getElementById('minus')
const delBtn = document.getElementById('del')
const umBtn = document.getElementById('um')

const submitBtn = document.getElementById('submit')

// const sum = Number(input1.value) + Number(input2.value) // приводим строку к числу
// console.log(typeof sum)  Проверяем тип данных

plusBtn.onclick = function () {
    action = '+'
}

minBtn.onclick = function () {
    action = '-'
}

delBtn.onclick = function () {
    action = '/'
}

umBtn.onclick = function () {
    action = '*'
}



function printResult(result) {
    result > 0 ? resultElement.style.color = 'green' : resultElement.style.color = 'red'

    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)

    if (actionSymbol == '/') {
        return num1 / num2
    } else if (actionSymbol == '*') {
        return num1 * num2
    }

    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

function umDelWithAction(inp1, inp2, actionSymbol) {
    return actionSymbol == '/' ? num1 / num2 : num1 * num2
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

}
