"use server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { ServerActionError } from "../handleError";

export async function writeWithAi({ prompt, temperature }) {
  try {
    console.log(prompt);
    if (!prompt) throw new Error("Prompt is missing");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const schema = {
      description: "Response structure for the user query",
      type: SchemaType.OBJECT,
      properties: {
        title: {
          type: SchemaType.STRING,
          description: "A catchy title for the blog post",
          nullable: false,
        },
        description: {
          type: SchemaType.STRING,
          description: "A short meta-description or summary",
          nullable: false,
        },
        content: {
          type: SchemaType.STRING,
          description:
            "The full blog post content formatted as an HTML string. Use tags like <p>, <strong>, <em>, <ul>, <li>, and <a href> where appropriate. Do not use Markdown.",
          nullable: false,
        },
      },
      required: ["title", "description", "content"],
    };

    // 4. Configure the model with the schema
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: temperature || 0.9,
        topP: 0.95,
        topK: 40,
        responseSchema: schema,
      },
    });

    // 5. Generate content
    const result = await model.generateContent(prompt);

    // 6. Parse the JSON text response
    const responseText = result.response.text();

    return { success: true, blogData: JSON.parse(responseText) };
  } catch (err) {
    console.log("Gemini Error:", err);
    return new ServerActionError(err.message).genericError();
  }
}
