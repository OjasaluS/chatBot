import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || ''
});

export const runtime = 'edge';

/**
 * Create a POST request against OpenAI for message generation
 * 
 * @param req 
 * @param res 
 * @returns StreamingTextResponse
 */
export async function POST(req: Request, res: Response) {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages: [
            {
                role: "assistant",
                content: "Do not exceed 500 characters. Be precise but funny and friendly."
            },
            ...messages,
        ],
        stream: true,
        temperature: 1
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}
