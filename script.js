const buttonPressCheck = document.querySelectorAll("button")
let startNumbers = []
startNumbersString = ""
function mathReplace(mathValue) {
    mathValue = mathValue.join("")
    console.log(`Выражение ${mathValue}`)
    return mathValue
}

    function displayDraw() {
    console.log('отрисованно')
    document.getElementById('display').textContent = startNumbersString
}

function checkButtonPress(button) {
    // console.log('нажата кнопка') кал для отладки
    const value = button.target.textContent
    console.log(value);
    if (value == '=') {
        console.log(`Итог вычисления ${eval(startNumbersString)}`)
    }
    else if (value == "+") {
        startNumbers.push(value)

    }
    else if (value == "−") {
        startNumbers.push("-")

    }
    else if (value == ".") {
        startNumbers.push(value)
    }
    else if (value == "%") {

    }
    else if (value == "AC") {
        startNumbers = []
    }
    else if (value == "+/-") {
        startNumbersString = (`-${mathReplace(startNumbers)}`)
        console.log(`Итог вычисления ${eval(startNumbersString)}`)
    }
    else if (value == "÷") {
        startNumbers.push("/")

    }
    else if (value == "×") {
        startNumbers.push("*")
    }
    else if ((value) == "1" || (value) == "2" || (value) == "3" || (value) == "4" || (value) == "5" || (value) == "6" || (value) == "7" || (value) == "8" || (value) == "9" || (value) == "0") {
        startNumbers.push(value)
        // console.log(startNumbers) тестовая параша
    }

}

while (true) {
    buttonPressCheck.forEach(button => {
    button.addEventListener("click", checkButtonPress)
    displayDraw()
    startNumbersString = mathReplace(startNumbers)
})

}