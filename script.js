const buttonPressCheck = document.querySelectorAll("button")
let startNumbers = []
startNumbersString = ""
function mathReplace(mathValue) {
    mathValue = mathValue.join("")
    return mathValue
}
function mathPercent(mathValue) {
    mathValue = mathValue.split("%")
    mathValue = (mathValue[0] / 100) * mathValue[1]
    return mathValue // я 
                    // приколист


}

function displayDraw() {
    // console.log('отрисованно')
    document.getElementById('display').textContent = startNumbersString

}

function checkButtonPress(button) {
    // console.log('нажата кнопка') кал для отладки
    const value = button.target.textContent
    console.log(value);
    if (value == '=') {
        console.log(`Итог вычисления ${eval(startNumbersString)}`)
        startNumbersString = eval(mathReplace(startNumbers))
        startNumbers = [startNumbersString]
        displayDraw()
        

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
        startNumbers.push(value)
        startNumbers = mathReplace(startNumbers)
        startNumbers = mathPercent(startNumbers)
        startNumbers = [startNumbersString]
        displayDraw()

    }
    else if (value == "AC") {
        startNumbers = []
         document.getElementById('display').textContent = "0"
    }
    else if (value == "+/-") {
        startNumbersString = eval(`-${mathReplace(startNumbers)}`)
        startNumbers = [startNumbersString]
        displayDraw()

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
    if (value != "=") {
        startNumbersString = mathReplace(startNumbers)
        displayDraw()
    }
}


    buttonPressCheck.forEach(button => {
    button.addEventListener("click", checkButtonPress)
})