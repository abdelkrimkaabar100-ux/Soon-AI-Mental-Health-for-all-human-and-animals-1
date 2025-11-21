// Groq API Integration Examples
// Choose the method that works for your environment

// ============================================
// METHOD 1: VANILLA JAVASCRIPT FETCH (Browser)
// ============================================
async function sendToSoonPsyVanillaFetch(userMessage) {
    try {
        const GROQ_API_KEY = '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';
        const GROQ_MODEL = 'openai/gpt-oss-20b';
        const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
        
        // Get user input values
        const moodInput = document.getElementById('mood-input');
        const petSleepInput = document.getElementById('pet-sleep-input');
        const gratitudeInput = document.getElementById('gratitude-input');
        
        const currentMood = moodInput ? moodInput.value.trim() : 'Not specified';
        const currentPetSleep = petSleepInput ? parseFloat(petSleepInput.value) || 0 : 0;
        const currentGratitude = gratitudeInput ? gratitudeInput.value.trim() : '';
        
        const systemContent = `You are SoonPsy, an AI companion for mental health and well-being.
        
CURRENT USER CONTEXT:
- Mood: ${currentMood}
- Pet Sleep: ${currentPetSleep} hours
- Gratitude: ${currentGratitude || 'None'}

Provide supportive mental health guidance.`;

        const requestBody = {
            "model": GROQ_MODEL,
            "messages": [
                {
                    "role": "system",
                    "content": systemContent
                },
                {
                    "role": "user",
                    "content": userMessage
                }
            ],
            "temperature": 0.7,
            "max_tokens": 1024
        };

        const response = await fetch(GROQ_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GROQ_API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error('API Error:', errorData);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
        
    } catch (error) {
        console.error('Error:', error);
        return "Error: Unable to process request. Check console for details.";
    }
}

// ============================================
// METHOD 2: OPENAI SDK APPROACH (Node.js/Server)
// ============================================
// Note: This requires npm install openai

// For Node.js environment:
// npm install openai
// Set environment variable: GROQ_API_KEY=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

import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

// OpenAI SDK approach using responses.create()
async function sendToSoonPsyOpenAI(userMessage) {
    try {
        const response = await client.responses.create({
            model: "openai/gpt-oss-20b", // Use Groq model
            input: userMessage,
        });
        return response.output_text;
    } catch (error) {
        console.error('OpenAI SDK Error:', error);
        return "Error: Unable to process request.";
    }
}

// Alternative: Using chat.completions with OpenAI SDK
async function sendToSoonPsyChatCompletion(userMessage) {
    try {
        const completion = await client.chat.completions.create({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "system",
                    content: "You are SoonPsy, a mental health AI companion."
                },
                {
                    role: "user", 
                    content: userMessage
                }
            ],
            temperature: 0.7,
        });
        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Chat Completion Error:', error);
        return "Error: Unable to process request.";
    }
}

// ============================================
// USAGE EXAMPLES
// ============================================

// For Browser/Frontend (Vanilla JS):
/*
const userMessage = "I'm feeling anxious today, what can you help me with?";
sendToSoonPsyVanillaFetch(userMessage).then(response => {
    console.log("AI Response:", response);
    // Display response in your UI
});
*/

// For Node.js/Backend (OpenAI SDK):
/*
const userMessage = "I'm feeling anxious today, what can you help me with?";
sendToSoonPsyOpenAI(userMessage).then(response => {
    console.log("AI Response:", response);
});
*/

// ============================================
// TESTING FUNCTION
// ============================================
async function testGroqConnection() {
    console.log("Testing Groq API connection...");
    
    try {
        const response = await sendToSoonPsyVanillaFetch("Hello, can you hear me?");
        console.log("✅ Groq API working! Response:", response);
        return true;
    } catch (error) {
        console.error("❌ Groq API failed:", error);
        return false;
    }
}

// Export for use in your application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sendToSoonPsyVanillaFetch,
        sendToSoonPsyOpenAI,
        sendToSoonPsyChatCompletion,
        testGroqConnection
    };
}