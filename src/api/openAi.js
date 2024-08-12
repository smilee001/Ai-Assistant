import axios from "axios";
import { apiKey, dummyMessages } from "../constants/dummymsg";

const client = axios.create({
    headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json"
    }
})

const ChatGptEndPoint = 'https://api.openai.com/v1/chat/completions'

export const ApiCall = async (prompt, messages) => {
    try {
        const res = await client.post(ChatGptEndPoint, {
            model: 'gpt-3.5-turbo',
            messages: [{
                role: "user",
                content: `${prompt}`
            }]
        })

        // console.log('data :',res.data.choices[0].message)

        let answer = res.data?.choices[0]?.message?.content;
        console.log(answer);
        messages.push({ role: 'assistant', content: answer.trim() });
        return Promise.resolve({ success: true, data: messages })

    }
    catch (err) {
        console.log('error :', err);
        return Promise.resolve({ success: false, msg: err.message })
    }
}