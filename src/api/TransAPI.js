import axios from "axios";
import { lookOption, dicExOption } from "../constants/HeaderOption"

export const lookUp = async (word) => {
    let options = {
        ...lookOption,
        data: [{
            Text: word,
            Translation: ""
        }]
    }
    const response = await axios.request(options)
    return response
}

export const getDicExamples = async (word) => {
    let lookUpRes = (await lookUp(word)).data
    let options = {
        ...dicExOption,
        data: [{
            Text: lookUpRes[0].normalizedSource,
            Translation: lookUpRes[0].translations[0].normalizedTarget
        }]
    }
    const response = await axios.request(options)
    return {
        lookUp: lookUpRes,
        exapmle: response.data
    }
}