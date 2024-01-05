import React, {useState} from "react";
import styles from "./module.css"

export const Calculator = () => {
    const [ first, setFirst ] = useState("")
    const [ second, setSecond ] = useState("")
    const [ operator, setOperator ] = useState("")
    const [ result, setResult ] = useState("")
    const [ equalBtn, setEqualBtn ] = useState(false)
    let number = ""
    let decimalPlaces = ""

    const setNumber = (value) => {

        if (!operator && equalBtn === true) {
            setFirst(value)
            setEqualBtn(false)
        } else if (!operator) {
            let firstString = first.toString()
            if (firstString.includes('.') && value === '.') {
                number = number
            } else {
                number = first + value
                setFirst(number)
            }
        }
        // Sets second number in equation, prevents multiple decimal points and allows for multi-digit numbers
        if (operator) {
            if (second.includes('.') && value === '.') {
                number = number
            } else {
                number = second + value
                setSecond(number)
            }
        }
    }

    const setOperation = (operator) => {
        // Prevents user from inputting operator without a first number
        if (!first) {
            setOperator("")
        } else {
            setOperator(operator)
        }
    }
    
    // Ensures the correct number of decimal places are returned for floats. 
    const decimalFormat = () => {
        // Changes to string to use .includes()
        let firstString = first.toString()
        let secondString = second.toString()
        if (operator === '^2') {
            if (firstString.includes('.')) {
                const firstSplit = firstString.split('.')
                let firstDecimals = firstSplit[1].length * 2
                decimalPlaces = firstDecimals
            } else {
                decimalPlaces = decimalPlaces
            }
        } else if (operator === '*' && firstString.includes('.') && secondString.includes('.')) {
            const firstSplit = firstString.split('.')
            let firstDecimals = firstSplit[1].length
            const secondSplit = secondString.split('.')
            let secondDecimals = secondSplit[1].length
            decimalPlaces = firstDecimals + secondDecimals
        } else if (operator === '*' && firstString.includes('.') && !secondString.includes('.')) {
            const firstSplit = firstString.split('.')
            decimalPlaces = firstSplit[1].length
        } else if (operator === '*' && !firstString.includes('.') && secondString.includes('.')) {
            const secondSplit = secondString.split('.')
            decimalPlaces = secondSplit[1].length
        } else if (firstString.includes('.') && secondString.includes('.')) {
            const firstSplit = firstString.split('.')
            let firstDecimals = firstSplit[1].length
            const secondSplit = secondString.split('.')
            let secondDecimals = secondSplit[1].length
            if (firstDecimals >= secondDecimals) {
                decimalPlaces = firstDecimals
            } else {
                decimalPlaces = secondDecimals
            }
        } else if (firstString.includes('.')) {
            let firstSplit = firstString.split('.')
            decimalPlaces = firstSplit[1].length
        } else if (secondString.includes('.')) {
            let secondSplit = secondString.split('.')
            decimalPlaces = secondSplit[1].length
        } 
    }

    // Sets final result to display, then resets first, second and operator variables. 
    const returnAndResetEquation = (value) => {
        setResult(value)
        setFirst(value)
        setSecond("")
        setOperator("")
        setEqualBtn(true)
    }

    const calculate = () => {
        if (operator === '/') {
            const quotient = parseFloat(first*100)/parseFloat(second*100)
            returnAndResetEquation(quotient) 
        } else if (operator === '-') {
            let difference = (parseFloat(first) - parseFloat(second)) *100 // multiplying by 100 allows for no zero to start floats
            decimalFormat()
            difference = (difference/100).toFixed(decimalPlaces)
            returnAndResetEquation(difference)
        } else if (operator === '*') {
            let product = first * second  
            decimalFormat()
            product = product.toFixed(decimalPlaces)
            returnAndResetEquation(product)
        } else if (operator === '+') {
            let sum = parseFloat(first) + parseFloat(second)  
            decimalFormat()
            sum = sum.toFixed(decimalPlaces)
            returnAndResetEquation(sum)
        } else if (operator === '^') {
            const answer = Math.pow(first, second)
            returnAndResetEquation(answer)
        } else if (operator === '^2') {
            let answer = Math.pow(first, 2)
            decimalFormat()
            answer = answer.toFixed(decimalPlaces)
            returnAndResetEquation(answer)
        } else if (operator === '√') {
            const answer = Math.sqrt(first)
            returnAndResetEquation(answer)
        }
    }

    // Resets all values/operator and clears display
    const clear = () => {
        setFirst("")
        setOperator("")
        setSecond("")
        setResult("")
    }

    // Deletes the most recently entered digit
    const deleteNumber = () => {
        if (!operator) {
            const firstString = first.toString()
            const newFirst = firstString.slice(0, firstString.length-1) 
            setFirst(newFirst)
        } else {
            const newSecond = second.slice(0, second.length-1)
            setSecond(newSecond)
        }
    }

    // Toggles input between positive and negative
    const negative = () => {
        if (second) {
            const negSecond = second * -1
            setSecond(negSecond)
        } else if (first) {
           const negFirst = first * -1
           setFirst(negFirst)
        }
    }

    const equationDisplay = () => {
        if (second && operator === '/' || operator === '-' || operator === '+' || operator === '*' || operator === '^') {
            return `${first} ${operator} ${second}`
        } else {
            return `${first || '-'} ${operator}`
        }
    }

    return (
        <>
        <div className="calculator__body">
            <div className="calculator__screen">
                <div className="calculator__screen__previous">
                   {equationDisplay()}
                </div>
                <div className="calculator__screen__first">
                    {result}
                </div>
            </div>
            <div className="calculator__buttons">
                <button onClick={() => clear()} id="ac">Clear</button>
                <button onClick={() => deleteNumber()} id="del">Del</button>
                <button onClick={() => negative()} className="calculator__operator" id="negative">+-</button>
                <button onClick={() => setOperation('^2')} className="calculator__operator" id="square">x<sup>2</sup></button>
                <button onClick={() => setOperation('^')} className="calculator__operator" id="exponent">x<sup>y</sup></button>
                <button onClick={() => setOperation('√')} className="calculator__operator" id="radical">√</button>
                <button onClick={() => setOperation('/')} className="calculator__operator">÷</button>
                <button onClick={() => setNumber('7')} className="calculator__button">7</button>
                <button onClick={() => setNumber('8')} className="calculator__button">8</button>
                <button onClick={() => setNumber('9')} className="calculator__button">9</button>
                <button onClick={() => setOperation('-')} className="calculator__operator">–</button>
                <button onClick={() => setNumber('4')} className="calculator__button">4</button>
                <button onClick={() => setNumber('5')} className="calculator__button">5</button>
                <button onClick={() => setNumber('6')} className="calculator__button">6</button>
                <button onClick={() => setOperation('*')} className="calculator__operator">*</button>
                <button onClick={() => setNumber('1')} className="calculator__button">1</button>
                <button onClick={() => setNumber('2')} className="calculator__button">2</button>
                <button onClick={() => setNumber('3')} className="calculator__button">3</button>
                <button onClick={() => setOperation('+')} className="calculator__operator">+</button>
                <button onClick={() => setNumber('0')} className="calculator__button">0</button>
                <button onClick={() => setNumber('.')} className="calculator__button">.</button>
                <button onClick={() => calculate()} id="total">=</button>
            </div>
        </div>
        </>
    )
}
export default Calculator;