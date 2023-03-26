import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';


export default function ProfileInfoItem(props) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 30, paddingTop: 15 }}>
            <Icon name={props.icon} color="#19C5AF" size={32} />
            <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.title}</Text>
                <Text style={{ color: '#19C5AF' }}>{props.value}</Text>
            </View>
        </View>
    )
}
