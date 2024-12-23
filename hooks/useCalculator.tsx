import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    rest = '-',
    divide = '/',
    multiply = '*',
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0')

    const [number, setNumber] = useState('0')
    const [prevNumber, setprevNumber] = useState('0')

    const lastOperator = useRef<Operator>();


    const clean = () => {

        setNumber('0')
        setprevNumber('0')
        setFormula('0')
        lastOperator.current = undefined
    }


    const toggleSign = () => {

        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)

        }
    }


    const deleteLast = () => {

        if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
            setNumber('0')
        } else {
            setNumber(number.slice(0, -1))
        }
    }

    const setLastNumber = () => {

        if (number.endsWith('.')) {
            setprevNumber(number.slice(0, -1))
        }
        setprevNumber(number);
        setNumber('0');
    };

    const divideOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.divide
    }

    const multiplyOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.multiply
    }


    const addOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.add
    }

    const restOperation = () => {
        setLastNumber();
        lastOperator.current = Operator.rest
    }

    const buildNumber = (numberString: string) => {



        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {

            if (numberString === '.') {
                return setNumber(number + numberString)
            }
            //Evaluar si es otro cero y hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString)
            }
            //Evaluar si es diferente de 0 y no hay punto porque es el primer numero
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString)
            }

            //Evitar el 0000.00
            if (numberString === '0' && !number.includes('.')) {
                return
            }

        }


        setNumber(number + numberString)

    }

    const calculateResult = () => {

        const [firsNumber, operation, secondNumber] = formula.split(' ')

        const num1 = Number(firsNumber)
        const num2 = Number(secondNumber)

        if (isNaN(num2)) return num1

        switch (operation) {
            case Operator.add:
                return num1 + num2

            case Operator.divide:
                return num1 + num2

            case Operator.multiply:
                return num1 * num2

            case Operator.rest:
                return num1 - num2

            default:
                throw new Error(`Operation ${operation} not implemented`)

        }
    }

    useEffect(() => {
        if (lastOperator.current) {
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`)
        } else {
            setFormula(number);
        }


    }, [number]);

    useEffect(() => {
        //TODO: Implementar la logica para el calculo
        const subResult = calculateResult()
        setprevNumber(subResult.toString())
    }, [formula])

    return {
        //Pros
        formula,
        number,
        prevNumber,
        lastOperator,

        //Methods
        buildNumber,
        clean,
        toggleSign,
        deleteLast,
        divideOperation,
        addOperation,
        multiplyOperation,
        restOperation,
        calculateResult,
    }
}