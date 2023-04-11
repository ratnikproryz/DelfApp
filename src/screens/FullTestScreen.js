import React from 'react'
import { StyleSheet, View } from 'react-native'
import TestCard from '../components/TestCard'

export default function FullTestScreen({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('FullTestDetail')
    }
    return (
        <View style={styles.body}>
            <TestCard onPress={pressHandler} />
            <TestCard onPress={pressHandler} />
            <TestCard onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "#ffffff",
    }
})