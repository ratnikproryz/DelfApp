import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScreenHeight, ScreenWidth } from '../Common';

export default function SearchComponet(props) {
    return (
        <View style={styles.body}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
            />
            <TouchableOpacity onPress={props?.onPress}>
                <Icon name={props.icon} style={styles.icon} size={16} color="#7E7E7E" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        borderRadius: 15,
        marginVertical: 10,
        height: ScreenHeight / 18,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        backgroundColor: '#F0F0F0',
    },
    icon: {
        marginLeft: 0,
    },
    input: {
        paddingLeft: 20,
        width: '90%',
    },
});
