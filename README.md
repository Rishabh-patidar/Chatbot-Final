# Silver Chatbot

A simple chatbot application that integrates a React.js frontend with a FastAPI Flask backend.

## Prerequisites

- Node.js and npm (for React.js)
- Python and pip (for FastAPI Flask)
- Git (for version control)

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/silver-chatbot.git
2. Install frontend dependencies and start React app:
   cd silver-chatbot/frontend
   npm install
   npm start

3. Install backend dependencies and start FastAPI server:
   cd ../backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload

### Explanation of the React.js Code (App.js):

1. Import Statements:
   - The code begins by importing React and the `useState` hook from the 'react' package.
   - It also imports the 'App.css' file for styling.

2. App Function:
   - `App` is the main functional component that renders the chatbot interface.
   - It uses the `useState` hook to manage the `inputText` (user input) and `chatHistory` (message history) states.

3. Event Handlers:
   - `handleInputChange`: Updates the `inputText` state based on user input.
   - `handleSend`: Sends user input to the FastAPI backend. It updates the chat history with the user's message and a temporary "Sending query..." message while waiting for the backend response.

4. Fetch to FastAPI Backend:
   - When the user sends a message, the code sends a `POST` request to the FastAPI backend using the `fetch` API.
   - It sends the user input as JSON data to the backend.

5. Rendering:
   - The component renders a chat interface, looping through `chatHistory` to display messages with appropriate classes ('user' or 'bot').
   - There's an input field for the user to type messages and a "Send" button to trigger the `handleSend` function.

### Explanation of the FastAPI Flask Code (app.py):

1. Import Statements:
   - Imports necessary modules from FastAPI and other packages.

2. App Initialization and CORS Configuration:
   - Initializes the FastAPI app.
   - Configures CORS settings to allow requests from specified origins (e.g., React frontend).

3. `TextInput` Model:
   - Defines a Pydantic model `TextInput` with a single attribute `text` of type `str`.

4. API Endpoint:
   - Defines a `POST` endpoint at "/process_input/" that expects JSON input in the structure of `TextInput`.
   - The commented-out version just returns a static response, while the active version responds with the input text along with a fixed "query".





