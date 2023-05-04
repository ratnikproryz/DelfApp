import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import TestCard from '../components/TestCard'
import { useState } from 'react'
import { getListExams } from '../api/ExaminationAPI'
import { initResult } from '../api/ResultApi'
import { useSelector } from 'react-redux'

export default function FullTestScreen({ navigation }) {
    const [exams, setExams] = useState([])
    const user = useSelector(state => state.auth.user);

    useEffect(() => {
        getExams()
    }, [])

    const getExams = async () => {
        const response = await getListExams("Full Test")
        console.log(response.data.data);
        setExams(response.data.data)
    }

    const pressHandler = async (item) => {
        const response = await initResult(item._id, user._id)
        navigation.navigate('FullTestDetail', { exam: item, result_id: response.data.data._id })
    }

    return (
        <View style={styles.body}>
            {exams?.map((item) => (
                <TestCard onPress={() => pressHandler(item)} key={item._id} name={item.name} />
            ))}
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