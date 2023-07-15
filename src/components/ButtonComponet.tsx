import React from "react";
import { TouchableOpacity,Text, Alert, StyleSheet } from "react-native";
import { primaryColor, textColor } from "./color";

type ButtonConponentPros = {
    text : string,
    textTolorCode: string,
    backgroudColor:string,
    onPress:Function
    border: string
}

const ButtonConponent: React.FC<ButtonConponentPros> = ({text,textTolorCode, onPress,backgroudColor,border}) => {
   const onPressButton = () => {
    onPress()
   }
    return (
    <TouchableOpacity style={styles.Button} onPress= {onPressButton}>
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create ({
    Button: {
        backgroundColor: textColor,
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 30,
        borderColor:primaryColor      ,
        borderWidth: 1,
        width: 115,
        justifyContent: 'center'
    },
    textButton: {
        color: primaryColor,
        fontSize: 16,
        fontWeight: '700',
    },
})
export default ButtonConponent;