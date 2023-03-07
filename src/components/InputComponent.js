import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function InputComponent(props) {
    const [text, setText] = useState('')
    const [passwordVisibility, setPasswordVisibility] = useState(props?.isPassword ? false : true);
    const [eyeIcon, setEyeIcon] = useState('eye');
    console.log(passwordVisibility)
    const showPassword = () => {
        console.log('ok');
        setEyeIcon((eyeIcon == "eye") ? 'eye-slash' : 'eye')
        setPasswordVisibility(!passwordVisibility)
    }
    const changeTextHander =(value)=>{
        setText(value)
    }

    return (
        <View style={styles.body}>
            <Icon name={props.icon} style={styles.icon} size={16} color="#7E7E7E" />
            <TextInput style={styles.input} placeholder={props.placeholder}
                secureTextEntry={!passwordVisibility}
                onChangeText={text => changeTextHander(text)}
            />
            {
                props.isPassword ?
                    <Icon name={eyeIcon} onPress={() => showPassword()} style={Object.assign({ paddingRight: 10 }, styles.icon)} size={16} color="#7E7E7E" />
                    : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        margin: 10,
        width: 200,
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: "#ffffff",
        borderColor: "#ffffff",
    },
    icon: {
        marginLeft: 10,
    },
    input: {
        flex: 1,
        padding: 10,
    },

})