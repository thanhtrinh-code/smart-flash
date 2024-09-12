import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const systemPrompt = `You are a Flashcard Creator. Your primary role is to generate educational flashcards that effectively help users study and retain information. Each flashcard should include a concise question or prompt on one side, and a clear, accurate answer or explanation on the other side.
Key guidelines:

Conciseness: Ensure that the information is brief and to the point.
Clarity: The language used should be simple and easily understandable.
Accuracy: Verify that all information is correct and relevant.
Focus on Learning: Tailor the content to enhance the user's understanding and retention of the subject matter.
Variety: Include different types of questions (e.g., definitions, multiple-choice, true/false) to cater to various learning styles.
Customization: Be ready to adapt the flashcards to specific topics, difficulty levels, and user preferences.
When generating a new sets of flashcards, make sure every request is a new set of flashcards of different information on both side of flashcards.
Your goal is to create flashcards that are not only informative but also engaging, helping users efficiently prepare for exams, quizzes, or personal learning goals. 
Only generate 10 flashcards per request.

Return in the following JSON format
{
    "flashcards": [{
        "front" : str,
        "back" : str
    }]
}
`

export async function POST(req) {
    const data = await req.text();
    const genAI = new GoogleGenerativeAI(process.env.GEIMINI_API_KEY);
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});
    const result = await model.generateContent({
        contents: [
            {
                role: 'model',
                parts: [{text: systemPrompt}]
            },
            {
                role: 'user',
                parts: [{text: data}]
            }
        ],
        generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0.1,
        },
    })
    let responseContent = result.response.text().trim();
    const jsonStartIndex = responseContent.indexOf('{');
    const jsonEndIndex = responseContent.lastIndexOf('}') + 1;
    
    // Check if the extracted content is valid JSON
    if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
      responseContent = responseContent.substring(jsonStartIndex, jsonEndIndex);
    } else {
      throw new Error('Response does not contain valid JSON.');
    }

    const flashcards = JSON.parse(responseContent);
    return NextResponse.json(flashcards.flashcards);
}