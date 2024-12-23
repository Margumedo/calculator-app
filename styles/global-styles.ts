import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";



export const globalStyles = StyleSheet.create({

    bakcground: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,

    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: 200,
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
    },

    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button: {
        backgroundColor: 'orange',
        width: 80,
        height: 80,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        marginHorizontal: 10,
    },

    buttonText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'SpaceMono'
    }

})