"use server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request) {
	const { speechInput } = await request.json();

	if (typeof speechInput !== "string" || speechInput.trim().length === 0) {
		return new Response(
			JSON.stringify({
				error: "Invalid input. Please provide a valid word.",
			}),
			{ status: 400, headers: { "Content-Type": "application/json" } },
		);
	}

	try {
		const result = await submitPrompt(speechInput);
		return new Response(JSON.stringify({ result }), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});
	}
}

async function submitPrompt(word = "") {
	// check if word is empty
	if (word.trim().length === 0) {
		return Promise.reject({ message: "Please enter a valid word" });
	}

	// call openai api with input
	try {
		const response = await openai.responses.create({
			model: "gpt-3.5-turbo",
			instructions:
				"You are a helpful assistant that defines words and provides examples.",
			input: generatePrompt(word),
		});

		return response.output_text;
	} catch (error) {
		console.log(error);
		return Promise.reject({ error });
	}
}

// generate prompt for openai with user input
function generatePrompt(word) {
	return `Define the word ${word}. Then give me an example of its use in a sentence. Use proper grammar and punctuation. 
  
  Return in json format like: {"definition": "<definition>", "example": "<example>"}`;
}
