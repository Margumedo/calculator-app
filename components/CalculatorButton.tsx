


import * as Haptics from 'expo-haptics'

import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import { Text, Pressable, TextProps } from 'react-native'


interface Props extends TextProps {
    colorKey?: string,
    colorText?: string,
    widthKey?: number,
    onPress?: () => void,
}


const CalculatorButton = ({
    children,
    colorKey = Colors.orange,
    colorText = 'white',
    widthKey = 80,
    onPress
}: Props) => {
    return (
        <Pressable style={({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: colorKey,
            width: widthKey,
            opacity: pressed ? 0.8 : 1
        })} onPress={() => {
            Haptics.selectionAsync()
            onPress && onPress();
        }} >
            <Text style={
                {
                    ...globalStyles.buttonText,
                    color: colorText
                }
            }>{children}</Text>
        </Pressable>
    )
}

export default CalculatorButton