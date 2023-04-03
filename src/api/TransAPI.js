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
    console.log(response);
    return response.data[0]
}

export const getDicExamples = async (word, translations) => {
    let options = {
        ...dicExOption,
        data: [{
            Text: word,
            Translation: translations
        }],
    }
    const response = await axios.request(options)
    return response.data[0]
}