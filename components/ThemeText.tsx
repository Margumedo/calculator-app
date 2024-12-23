


import { Text, type TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'


interface Props extends TextProps {
    variant?: 'h1' | 'h2';
}


const ThemeText = ({ children, variant, ...rest }: Props) => {
    return (
        <Text
            style={[
                { color: 'white', fontSize: 20, fontFamily: 'SpaceMono' },
                variant === 'h1' && globalStyles.mainResult,
                variant === 'h2' && globalStyles.subResult

            ]}
            {...rest}>{children}</Text>
    )
}

export default ThemeText