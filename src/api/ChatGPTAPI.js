import axios from 'axios';
import { OpenAIKey, OpenAIURL } from '../constants/Common';

export const getMessage = async text => {
  try {
    const response = await axios.post(
      `${OpenAIURL}/chat/completions`,
      JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: text }],
        temperature: 0.7,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OpenAIKey}`,
        },
      },
    );
    console.log(
      'ChatGPTAPI.js:getMessage: ',
      JSON.stringify(response.data.choices[0].text),
    );
    return response.data;
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};
