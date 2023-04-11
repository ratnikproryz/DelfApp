import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BLACK, BLUE } from '../constants/color';

export default function Header(props) {
    const goBack = () => {
        props.navigation.goBack();
    }

    return (
        <View style={styles.section}>
            <TouchableOpacity style={{}} onPress={goBack}>
                <Icon name='chevron-left' size={24} color={BLACK} />
            </TouchableOpacity>
            <Text style={{ color: BLACK, fontSize: 24 }}>{props.title}</Text>
            <TouchableOpacity>
                <Text style={{ color: BLUE, fontSize: 18 }}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 5,
        height: 50,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    }
})