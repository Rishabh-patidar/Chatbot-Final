Silver Chatbot
Silver Chatbot is a simple chat application built using FastAPI and React.

Getting Started -->

Backend
Navigate to the backend directory.
Install the required Python packages(virtual environment):
python install -m venv venv;
venv/Scripts/activate
bash:
pip install fastapi
pip install uvicorn
Run the FastAPI backend server:
bash
uvicorn main:app --reload

Frontend
Navigate to the frontend directory.
Install the required Node.js packages:
bash
npm install
Run the React frontend:
bash
npm start

<!-- Explanation of the React.js `app.js` file:
1. The `useState` hook is used to manage state in the functional component. Two states are defined: `inputText` to track the user's input and `chatHistory` to keep track of the conversation history.

2. The `handleInputChange` function is triggered whenever the user types in the input field. It updates the `inputText` state with the current input.

3. The `handleSend` function is triggered when the user clicks the "Send" button. It performs the following steps:
   - If the input is empty or contains only whitespace, it returns early.
   - Adds the user's message to the chat history with `isUser` set to `true`, and a "Sending query..." message with `isUser` set to `false`.
   - Sends the user input to the FastAPI backend using a POST request.
   - If the response is successful, it updates the temporary "Sending query..." message with the actual response from the backend and adds it to the chat history with `isUser` set to `false`.
   - Clears the input field and removes the temporary "Sending query..." message from the chat history.

4. The return section of the component renders the chat interface. It maps through the `chatHistory` array to display each message in a `div` element. The class of each `div` is determined by the `isUser` property of the message, either `'user'` or `'bot'`.

5. The input field and "Send" button allow the user to interact with the chatbot. When the user types a message and clicks "Send," the conversation is updated in real time based on the user's input and the bot's response.

Explanation of the FastAPI `app.py` file:
1. `from fastapi import FastAPI, HTTPException`: These lines import the necessary modules from the FastAPI library.

2. `from pydantic import BaseModel`: This line imports `BaseModel` from the Pydantic library, which is used for defining request and response models.

3. `from typing import List`: This line imports the `List` type from the Python `typing` module.

4. `app = FastAPI()`: This line initializes a FastAPI instance.

5. `class Message(BaseModel): ...`: This defines a Pydantic model `Message` with a single field `text`.

6. `class BotResponse(BaseModel): ...`: This defines a Pydantic model `BotResponse` with a single field `response`.

7. `@app.post("/process_input/", response_model=BotResponse)`: This is a FastAPI route decorator that listens for POST requests at the specified path and returns a `BotResponse`.

8. `def process_input(message: Message): ...`: This function handles the POST request. It takes a `Message` object as input, processes the bot's response , and returns a `BotResponse`. -->

