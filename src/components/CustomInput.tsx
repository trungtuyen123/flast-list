import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

type CustomInputProps = {
    label: string,
    textPlaceholder:string,
    isEmail?: boolean,
    onChangeText: (text: string) => void,
    value: string,

}
const CustomInput:React.FC<CustomInputProps>= ({label,textPlaceholder, isEmail, onChangeText, value}) => {

    return (
        <View style = {{ marginHorizontal: 20, marginBottom: 24}}>
        <Text style={styles.labelText}>{label}</Text>
        <TextInput style={styles.textInput} placeholder={textPlaceholder}   onChangeText={onChangeText}
        value={value}/>

        {
            isEmail && <TouchableOpacity>
                <Text style={styles.textButton}>Đăng nhập bằng SĐT</Text>
                </TouchableOpacity>
        }
        </View>
        
    )
}

const styles = StyleSheet.create({
    labelText: {
        color: 'black',
        fontSize: 18,
        marginBottom: 8
},
    textInput: {
        backgroundColor: '#f4f4f4',
        paddingHorizontal: 16,
        borderRadius: 30,
        fontSize: 16
        },
        textButton: {
        color: '#FF6366',
        fontSize: 16,
        textAlign:'right',
        marginTop:4
            },
})
   
export default CustomInput;