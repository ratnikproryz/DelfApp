import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function Paragrahp() {
    return (
        <View style={styles.container}>
            <ScrollView style={[styles.body, styles.shadowProp]}>
                <Text style={styles.content}>
                    Au Balcon
                    Depuis la salle panoramique de ce restaurant,
                    la vue sur la ville de Lyon est magnifique. C’est
                    le cadre idéal pour un dîner romantique, mais
                    c’est aussi un endroit tranquille pour les repas
                    d’affaires. La cuisine est classique et à base de
                    produits régionaux. Le menu « tout légumes » est
                    très apprécié des personnes qui ne mangent ni
                    viande, ni poisson.
                    Le menu « tradition » permet de goûter d’excellents
                    produits, comme la truite saumonée, le gâteau de
                    légumes ou le dessert au chocolat. Les serveurs
                    sont mal organisés, c’est dommage.
                </Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    shadowProp: {
        shadowColor: "#757575",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3
    },
    content: {
        textAlign: 'justify',
        paddingTop: 15,
    },
    container:{
        paddingHorizontal: 20,
        paddingVertical: 15,
        maxHeight: 300,
    }

})