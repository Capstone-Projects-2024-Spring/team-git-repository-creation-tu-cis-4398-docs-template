import * as dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const openai = new OpenAI({
    apikey: process.env.OPENAI_API_KEY,

})

const assistant = await openai.beta.assistants.create({
    name: "Spanish Tutor",
    instructions: "You are a spanish tutor",
    tools: [
        {
        type: "code_interpreter",
         }
    ],
        model: "gpt-3.5-turbo",
})

//make thread
const thread = await openai.beta.threads.create();
console.log(thread);

//create message

const message = await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: "what is hello in spanish?"
});

//run ai

const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistant.id,
    instructions:"Address the user as Aidan",
});

//const run = await openai.beta.threads.runs.retrieve("thread_id here", "run_id here")
/*
console.log(run);


const messages = await openai.beta.threads.messages.list("thread_id")    // all the thread ids and all should from from the data base in actual code.

messages.body.data.array.forEach((message) => {
    console.log(message.content);
});
*/

