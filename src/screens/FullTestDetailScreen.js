import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Part1 from '../components/Part1'
import Part2_1 from '../components/Part2_1'
import Part2_23 from '../components/Part2_23'
import Part3 from '../components/Part3'
import { useState } from 'react'

export default function FullTestDetailScreen({ navigation }) {
    const [index, setIndex] = useState(1)
    const render = (index) => {
        switch (index) {
            case 1:
                return <Part1 />
            case 2:
                return <Part2_1 />
            case 3:
                return <Part2_23 />
            case 4:
                return <Part3 />
            default:
                setIndex(1)
                return <Part1 />
        }
    }

    return (
        <View style={styles.body}>
            <Header title='1 - EXC 1' navigation={navigation} />
            {render(index)}
            <Footer onNext={() => setIndex(index => index + 1)} onBack={() => setIndex(index => index - 1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#ffffff",
    },

})