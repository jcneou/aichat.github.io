```javascript
const API_KEY = "您的ChatGPT API密钥";
const API_URL = "https://api.openai.com/v1/engines/davinci-codex/completions";

document.getElementById("user-input-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const userInput = document.getElementById("user-input").value;
    const response = await getChatGPTResponse(userInput);
    displayResponse(response);
});

async function getChatGPTResponse(prompt) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 50,
            n: 1,
            stop: null,
            temperature: 1
        })
    });

    const data = await response.json();
    return data.choices[0].text;
}

function displayResponse(response) {
    const messages = document.getElementById("messages");
    const message = document.createElement("div");
    message.textContent = response;
    messages.appendChild(message);
}
```