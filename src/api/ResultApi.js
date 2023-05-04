import axios from "axios";
import { BaseURL } from "../constants/Common";

export const initResult = async (exam_id, userID) => {
    try {
        const response = await axios.post(`${BaseURL}/results`, {
            user: userID,
            examination: exam_id,
            score: 0,
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

export const submitAnswers = async (answers, result_id) => {
    try {
        const response = await axios.post(`${BaseURL}/answers/save`, {
            answers:JSON.stringify(Array.from(answers.entries())),
            result_id: result_id,
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        console.log(response.data.data);
        return response
    } catch (error) {
        console.log(error);
    }
}