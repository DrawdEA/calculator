const output = document.querySelector("#output")

let firstNum = null
let secondNum = null
let result = null
let operand = null



function operate() {
    let a = parseInt(firstNum)
    let b = parseInt(secondNum)

    if (!operand) { // If there is no operand, just show the first value.
        result = firstNum
    } else { // Else, continue as normal.
        b = !b ? a : b // If no 2nd value, make the first number be the same as b.
        switch (operand) {
            case "+":
                result = a + b
                break
            case "-":
                result = a - b
                break
            case "*":
                result = a * b
                break
            case "/":
                result = a / b
                break
        }
    }
    
    output.textContent = result
    firstNum = null
    secondNum = null
    operand = null
}

function insertNum(num) {
    if (!operand) { // No operand yet, insert to first num.
        firstNum = !firstNum ? num : firstNum + num
        output.textContent = firstNum
    } else { // Has operand, insert to second num.
        secondNum = !secondNum ? num : secondNum + num
        output.textContent = secondNum
    }
}

function insertOperand(o) {
    if (!firstNum) { 
        if (result) { // If there is no first number but there is a result num, automatically make it the first num.
            firstNum = result
            result = null
        } else { // Else, just put 0.
            firstNum = 0
        }
    }

    // Edge Case: If there is already a second number, evaluate the existing expression before adding a new operand.
    if (secondNum) {
        operate()
        firstNum = result
        result = null
        output.textContent = firstNum
    }

    // Set the operand.
    operand = o
}



// Sets up the operand buttons.
document.querySelector("#plus").addEventListener("click", () => { insertOperand("+") })
document.querySelector("#subtract").addEventListener("click", () => { insertOperand("-") })
document.querySelector("#multiply").addEventListener("click", () => { insertOperand("*") })
document.querySelector("#divide").addEventListener("click", () => { insertOperand("/") })

// Sets up the number buttons. Inserts the numbers as strings.
document.querySelector("#one").addEventListener("click", () => { insertNum("1") })
document.querySelector("#two").addEventListener("click", () => { insertNum("2") })
document.querySelector("#three").addEventListener("click", () => { insertNum("3") })
document.querySelector("#four").addEventListener("click", () => { insertNum("4") })
document.querySelector("#five").addEventListener("click", () => { insertNum("5") })
document.querySelector("#six").addEventListener("click", () => { insertNum("6") })
document.querySelector("#seven").addEventListener("click", () => { insertNum("7") })
document.querySelector("#eight").addEventListener("click", () => { insertNum("8") })
document.querySelector("#nine").addEventListener("click", () => { insertNum("9") })
document.querySelector("#zero").addEventListener("click", () => { insertNum("0") })

// Sets up the equal button.
document.querySelector("#equal").addEventListener("click", () => { operate() })

// Sets up the clear button, which clears everything in the calculator.
document.querySelector("#clear").addEventListener("click", () => {
    firstNum = null
    secondNum = null
    operand = null
    result = null
    output.textContent = 0
})

