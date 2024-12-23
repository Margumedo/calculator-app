import { View, Text, StatusBar, useColorScheme } from 'react-native'

import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorAPP = () => {
    const colorScheme = useColorScheme();

    const { formula, prevNumber, buildNumber, clean, toggleSign, deleteLast, addOperation, restOperation, multiplyOperation, divideOperation, calculateResult } = useCalculator();

    return (
        <View style={globalStyles.calculatorContainer}>
            <StatusBar
                backgroundColor={colorScheme === 'dark' ? '#000000' : '#FFFFFF'}
            />
            <View style={{ padding: 30 }} >
                <Text
                    style={globalStyles.mainResult}
                    numberOfLines={1}
                    adjustsFontSizeToFit >{formula}</Text>

                {
                    formula === prevNumber ?
                        (<Text style={globalStyles.subResult}> </Text>)
                        :
                        (<Text style={globalStyles.subResult}>{prevNumber}</Text>)

                }
            </View>

            {/* fila #1 */}
            <View style={globalStyles.row}>

                <CalculatorButton
                    colorText='black'
                    colorKey='gray'
                    onPress={clean} >C</CalculatorButton>
                <CalculatorButton
                    colorText='black'
                    colorKey='gray'
                    onPress={toggleSign} >+/-</CalculatorButton>
                <CalculatorButton
                    colorText='black'
                    colorKey='gray'
                    onPress={deleteLast} >del</CalculatorButton>
                <CalculatorButton
                    onPress={divideOperation}>÷</CalculatorButton>

            </View>

            //TODO: Fila 2
            <View style={globalStyles.row}>

                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('7')} >7</CalculatorButton>
                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('8')} >8</CalculatorButton>
                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('9')}>9</CalculatorButton>
                <CalculatorButton onPress={multiplyOperation} >x</CalculatorButton>
            </View>

            //TODO: Fila 3
            <View style={globalStyles.row}>

                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('4')} >4</CalculatorButton>
                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('5')} >5</CalculatorButton>
                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('6')}>6</CalculatorButton>
                <CalculatorButton onPress={addOperation} >+</CalculatorButton>
            </View>

            //TODO: Fila 4
            <View style={globalStyles.row}>

                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('1')} >1</CalculatorButton>
                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('2')} >2</CalculatorButton>
                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('3')}>3</CalculatorButton>
                <CalculatorButton onPress={restOperation} >-</CalculatorButton>
            </View>

            //TODO: Fila 2
            <View style={globalStyles.row}>

                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('0')}
                    widthKey={180} >0</CalculatorButton>
                <CalculatorButton
                    colorKey={Colors.darkGray}
                    onPress={() => buildNumber('.')} >.</CalculatorButton>
                <CalculatorButton onPress={calculateResult} >=</CalculatorButton>
            </View>

        </View>
    )
}

export default CalculatorAPP