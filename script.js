const buttonPressCheck = document.querySelectorAll("button")
let startNumbers = []

function mathReplace(mathValue) {
    mathValue = mathValue


    return eval()
}

function checkButtonPress(button) {
    // console.log('нажата кнопка') кал для отладки
    const value = button.target.textContent
    console.log(value);
    if (value == '=') {
        console.log('function =')

    } 
    else if (value == "+") {
        
    }
    else if (value == "-") {

    }
    else if (value == ".") {

    }
    else if (value == "%") {

    }
    else if (value == "AC") {

    }
    else if (value == "+/-") {

    }
    else if (value == "÷") {

    }
    else if (value == "×") {

    }
    else if (value == "1") {
        startNumbers.push(1)
    }
    else if (value == "2") {
        startNumbers.push(2)
    }
    else if (value == "3") {
        startNumbers.push(3)
    }
    else if (value == "4") {
        startNumbers.push(4)
    }
    else if (value == "5") {
        startNumbers.push(5)
    }
    else if (value == "6") {
        startNumbers.push(6)
    }
    else if (value == "7") {
        startNumbers.push(7)
    }
    else if (value == "8") {
        startNumbers.push(8)
    }
    else if (value == "9") {
        startNumbers.push(9)
    }
    else if (value == "0") {
    startNumbers.push()
    }
}


buttonPressCheck.forEach(button => {
    button.addEventListener("click", checkButtonPress)
})