import axios from "axios";
import { BaseURL } from "../constants/Common";

export const getListExams = async (type) => {
    try {
        const response = await axios.get(`${BaseURL}/examinations?type=${type}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (error) {
        console.log(error);
    }
}

export const getExercisesOfExam = async (exam_id) => {
    try {
        const response = await axios.post(`${BaseURL}/exercises/get-exercises-of-exam`, {
            "exam_id": exam_id
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return response
    } catch (error) {
        console.log(error);
    }
}