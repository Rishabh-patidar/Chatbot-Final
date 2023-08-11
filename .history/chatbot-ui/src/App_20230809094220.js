import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSend = () => {
    if (inputText.trim() === '') return;

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { text: inputText, isUser: true },
    ]);

    // Send inputText to the backend and get the response from the chatbot
    // Update chatHistory with the chatbot's response

    setInputText('');
  };

  return (
    <div className="App">
      <h1>Shilver Chatbot</h1>
      <div className="chat-container">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
